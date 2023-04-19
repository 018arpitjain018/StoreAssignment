import React from 'react';
import { TouchableOpacity } from 'react-native';
import AppText from '../Text';
import styles from './styles';

/**
 * The SecondaryButton component is a reusable button component in React that takes in the following props:
 * 
 * @params
 * * title (required): A string that specifies the text to be displayed on the button.
 * * disbale (optional): A boolean value that indicates whether the button is disabled or not. When set to true, the button is disabled and cannot be pressed. Default value is false.
 * * onPress (optional): A callback function that is executed when the button is pressed. This function is only executed when disbale is set to false.
 * * primary (optional): A boolean value that determines the button style. When set to true, the button uses the primary color and text styles. Default value is false.
 * 
 * @returns
 * It renders secondary button component inside parent react node
 */
export default function SecondaryButton({title, disbale, onPress, primary}) {
    const activeOpacity = !disbale ? 0.5 : 1; // set opacity of button based on it's enabled or disabled
    const buttonColor = primary ? styles.primaryColor : styles.secondaryColor // sets button color based on it's type
    const textColor = primary ? styles.primaryTextColor : styles.secondaryTextColor // sets button text color based on it's type

    return (
        <TouchableOpacity onPress={() => !disbale && onPress && onPress()} activeOpacity={activeOpacity} style={[styles.container, buttonColor]}>
            <AppText style={[styles.title, textColor]}>{title}</AppText>
        </TouchableOpacity>
    )
}
