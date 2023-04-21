import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, Image} from 'react-native';
import { useDispatch } from 'react-redux'

import {login} from './reducer';
import {InputTxt, AppButton, Logo} from '../../Components';
import {EMAIL_REGEX} from '../../Constants';

import styles from './styles';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [submitEnable, setSubmitEnable] = useState(false);
  const [loading, setLoading] = useState(false)

  /**
   * The useEffect hook is used to call the verifyEmail() method whenever the email state variable changes.
   */
  useEffect(() => {
    verifyEmail();
  }, [email])

  /**
   * The verifyEmail() method is used to verify the validity of an email address based on a regular expression (EMAIL_REGEX) and set the state of a submit button accordingly.
   * @params
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const verifyEmail = () => {
    if (email.match(EMAIL_REGEX) && !submitEnable) {
      setSubmitEnable(true);
    } else if (!email.match(EMAIL_REGEX) && submitEnable) {
      setSubmitEnable(false);
    }
  }
  
  /**
   * The userLogin() method is used to initiate the login process by dispatching a login action with user email and callbacks to handle the result of the login attempt.
   * @params
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const userLogin = () => {
    setLoading(true);
    dispatch(login({
      email: email,
      onSuccess: () => setLoading(false), // sets the loading state variable to false
      onError: (e) => {
        alert(e)
        setLoading(false) // sets the loading state variable to false
      }
    }))
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      {/* Page Header */}
      <Logo />
      
      {/* Content */}
      <InputTxt placeholder="What's your Email??" onChangeText={setEmail} inputMode='email' keyboardType={'email-address'} autoFocus={true} onSubmitEditing={() => submitEnable && userLogin()} />
      <AppButton title='submit' disbale={!submitEnable} loading={loading} onPress={userLogin} />
    </KeyboardAvoidingView>
  )
}

export default Login;
