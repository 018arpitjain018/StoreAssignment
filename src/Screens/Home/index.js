import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';

import {Text, AppButton as Button, Avatar, Post} from '../../Components';

import { useDispatch, useSelector } from 'react-redux'
import { getMonthName, getWeekDay } from '../../utils/globalMethods';

import {logout} from '../Login/reducer';
import {GetPost} from './reducer'

import styles from './styles';
import { BLUE } from '../../Constants/colors';

function Home({navigation}) {
  const dispatch = useDispatch();
  const email = useSelector(state => state.AuthReducer.email)
  const post = useSelector(state => state.PostReducer.post)

  const [date, setDate] = useState(null)
  const [loading, setLoading] = useState(false)

  /**
   * The useEffect() hook used to handle side effects in functional components. 
   * In this case, it is used to call two functions, setCurrentDate() and getHomePosts(), when the component mounts.
   */
  useEffect(() => {
    setCurrentDate();
    getHomePosts();
  }, [])

  /**
   * The function setCurrentDate sets the current date by creating a new Date object and 
   * extracting the day of the week, month day, and month name from it. 
   * It then formats these values into a string with the format "Weekday MonthDay Month" and 
   * passes it to the setDate function.
   * 
   * @params
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const setCurrentDate = () => {
    let today = new Date();
    
    let weekDay = getWeekDay(today.getDay());
    let monthDay = today.getDate();
    let month = getMonthName(today.getMonth())

    let dateString = `${weekDay} ${monthDay} ${month}`
    setDate(dateString.toUpperCase())
  }

  /**
   * This function is used to fetch home page posts from the server.
   * 
   * @params
   * hideLoader (optional): A boolean parameter which indicates whether to show or hide the loader. If true, the loader will be hidden. By default, its value is false.
   * onSuccess (optional): A function parameter which will be executed when the API call is successful. It takes _post as an argument which represents the post data. By default, its value is null.
   * 
   * @returns
   * This function doesn't return anything.
   */
  const getHomePosts = (hideLoader=false, onSuccess=null) => {
    !hideLoader && setLoading(true);
    dispatch(GetPost({
      onSuccess: (_post) => {
        !hideLoader && setLoading(false)
        onSuccess && onSuccess(_post)
      },
      onError: (e) => {
        alert(e)
        !hideLoader && setLoading(false)
      }
    }))
  }

  /**
   * This function is used to navigate to the Details screen and pass post object as a parameter.
   * 
   * @params
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const navigateToDetails = () => {
    navigation.push('Details', {...post})
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Header */}
        <View>
          <Text secondary={true} style={styles.dateText}>{date}</Text>
          <View style={styles.headerSection}>
            <Text style={styles.dateDay}>Today</Text>
            <Avatar title={email} />
          </View>
        </View>

        {/* Post Contents */}
        <View style={styles.content}>
          {loading && <ActivityIndicator color={BLUE} />}
          {post && <Post post={post} onPress={navigateToDetails} refresh={() => getHomePosts(true)} />}
        </View>

        {/* User options */}
        <Button title='Logout' enable={true} onPress={() => dispatch(logout())} />
      </View>
    </SafeAreaView>
  )
}

export default Home;
