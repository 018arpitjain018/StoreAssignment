import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { PLACEHOLDER_IMAGE } from '../../Assets';
import CardSection from './CardSection';

import styles from './styles';

/**
 * This functional component that displays a post with a thumbnail image, title, subtitle, and a refresh button. 
 * It takes in a post object as a prop that contains the necessary data to render the post. 
 * It also takes in optional onPress and refresh functions to handle press events and refresh requests respectively.
 * 
 * @params
 * * post (required): an object containing the following properties:
 *      title (required): a string representing the title of the post
 *      subTitle (required): a string representing the subtitle of the post
 *      thumbNailImage (optional): a string representing the URL of the thumbnail image of the post
 *      logo (optional): a string representing the URL of the logo of the post
 * * onPress (optional): a function to handle press events on the post
 * * refresh (optional): a function to handle refresh requests
 * 
 * @returns
 * It renders Post Card in the component tree
 */
export default function Post({post, refresh, onPress}) {
    if (!post) return null;
    
    const {title, subTitle, thumbNailImage, logo} = post;
    
    const thumbImage = thumbNailImage ? {uri: thumbNailImage} : PLACEHOLDER_IMAGE // Post thumbnail image to be use
    const _logo = logo ? {uri: logo} : PLACEHOLDER_IMAGE // Post author logo to be used

    return (
        <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
            <View style={styles.container}>
                {/* Hero Image of post */}
                <Image source={thumbImage} style={styles.thumbnailImage} />

                {/* Post content */}
                <CardSection _logo={_logo} title={title} subTitle={subTitle} refresh={refresh} />
            </View>
        </TouchableWithoutFeedback>
    )
}

