import React from 'react';
import { View, Image } from 'react-native';
import SecondaryButton from '../SecondaryButton';
import AppText from '../Text';

import styles from './styles';

/**
 * This component is used to display a section with an image, title, and subtitle, 
 * along with a refresh button and an In-App Purchase text.
 * 
 * @params
 * * _logo (required): An image source for the logo image to be displayed on the left side of the card section.
 * * title: A string representing the title of the card section.
 * * subTitle: A string representing the subtitle of the card section.
 * * refresh: A function that will be called when the refresh button is pressed. This function is optional.
 * * style: An object representing the style of the component. This prop is optional
 * 
 * @returns
 * It renders CardSection component inside parent node
 */
function CardSection({_logo, title, subTitle, refresh, style}) {
    return (
        <View style={[styles.section, style]}>

            {/* Content Section */}
            <View style={styles.infoSection}>
                <Image source={_logo} style={styles.logo} />
                <View style={styles.info}>
                    {title && <AppText style={styles.title}>{title}</AppText>}
                    {subTitle && <AppText secondary={true} style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>

            {/* Information Text */}
            <View style={styles.actionView}>
                <SecondaryButton onPress={() => refresh && refresh()} title={'refresh'} />
                <AppText secondary={true} style={styles.inAppPurschaseText}>In-App Purchase</AppText>
            </View>
        </View>
    )
}

export default CardSection;
