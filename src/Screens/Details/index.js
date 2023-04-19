import React from 'react';
import { View, ScrollView, SafeAreaView, Image, TouchableOpacity, ActivityIndicator, Dimensions, Share } from 'react-native';
import { useDispatch } from 'react-redux'
import RenderHtml from 'react-native-render-html';

import {Text, Avatar, CardSection, SecondaryButton} from '../../Components';
import { PLACEHOLDER_IMAGE, SHARE_ICON } from '../../Assets';
import { BLUE } from '../../Constants/colors';
import {GetPost} from '../Home/reducer';
import styles from './styles';

const {width, height} = Dimensions.get('window');
function Details({navigation, route}) {
    const dispatch = useDispatch()
    const { mainImage, title, subTitle, logo, text } = route.params;
    const heroImage = mainImage ? {uri: mainImage} : PLACEHOLDER_IMAGE;
    const _logo = logo ? {uri: logo} : PLACEHOLDER_IMAGE;

    /**
     * This function is used to navigate to the previous screen in the navigation stack.
     * 
     * @params
     * This method does not take any parameters.
     * @returns
     * This method does not return any value.
     */
    const navigateBack = () => {
        navigation.goBack();
    }

    /**
     * This function is used to refresh the post data by dispatching the GetPost action with an onSuccess and onError callback.
     * 
     * @params
     * This method does not take any parameters.
     * @returns
     * This method does not return any value.
     */
    const onRefresh = () => {
        dispatch(GetPost({
            onSuccess: (_post) => {
                navigation.setParams(_post)
            },
            onError: (e) => {
                alert(e)
            }
        }))
    }

    /**
     * This function handles the functionality of sharing a post's title and subtitle. 
     * It utilizes the Share API provided by React Native to share the content via different apps available on the user's device.
     * 
     * @param
     * This method does not take any parameters.
     * 
     * @returns
     * This method does not return any value.
     */
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              `${title}, ${subTitle}`,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };

    /**
     * This UI will be rendered while the conetent is being loaded 
     * and will show loader indicator to user
     */
    if (Object.keys(route.params) === 0) {
        return (
            <View style={styles.loadingSection}>
                <ActivityIndicator color={BLUE} />
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <ScrollView>
                {/* Hero View */}
                <View style={styles.heroSection}>
                    <Image source={heroImage} style={styles.heroImage} />
                    <View style={styles.headerInfo}>
                        <SafeAreaView>
                            <Text style={styles.haderSubTitle}>major update</Text>
                            <Text style={styles.haderTitle}>{title}</Text>
                        </SafeAreaView>
                    </View>
                </View>

                {/* Header */}
                <CardSection style={styles.headerSection} _logo={_logo} title={title} subTitle={subTitle} refresh={onRefresh} />

                {/* Content */}
                <View style={styles.contentView}>
                    <RenderHtml
                        contentWidth={width}
                        source={{html: text}}
                    />
                </View>

                {/* Footer */}
                <View style={styles.footerSection}>
                    <Image source={_logo} style={styles.logoImage} />
                    <View style={styles.footerInfoSection}>
                        <Text style={styles.footerTitle}>{title}</Text>
                        <Text style={styles.footerSubTitle}>{subTitle}</Text>
                    </View>
                    <View style={styles.footerActionSection}>
                        <SecondaryButton primary={true} onPress={onRefresh} title={'refresh'} />
                        <Text secondary={true} style={styles.inAppPurschaseText}>In-App Purchase</Text>
                    </View>
                </View>

                <View style={styles.shareSheet}>
                    <TouchableOpacity onPress={onShare} activeOpacity={0.5} style={styles.shareButton}>
                        <Image source={SHARE_ICON} />
                        <Text style={styles.shareText}>Share Story</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* close icon */}
            <TouchableOpacity onPress={navigateBack} style={styles.closeMenu}>
                <Avatar title={'X'} style={styles.close} avatarTitle={styles.closeTitle} />
            </TouchableOpacity>
        </View>
    )
}

export default Details;
