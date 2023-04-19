import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { WHITE } from '../../Constants/colors';

import AppText from '../Text';
import styles from './styles';

/**
 * This is an app button component that renders a TouchableOpacity component 
 * with the given title, disable, onPress, and loading props.
 * 
 * @params
 * * title (string): the text to display on the button
 * * disable (boolean): flag to indicate if the button is disabled or not
 * * onPress (function): a callback function that will be called when the button is pressed
 * * loading (boolean): flag to indicate if the button is in a loading state or not
 * 
 * @returns
 * It renders a button component where us text and functionality can be handled by parent component
 */
function AppButton({title, disbale, onPress, loading}) {
    const backgroundColor = !disbale ? styles.enable : styles.disbale; // sets background color based on button is enabled or disabled
    const activeOpacity = !disbale ? 0.5 : 1; // sets opacity of button based on it's enabled or disbled.

    {/* If the operation is in processing stage it will shaow loading indicator else renders text on button */}
    return (
        <TouchableOpacity onPress={() => !disbale && onPress()} activeOpacity={activeOpacity} style={[styles.container, backgroundColor]}>
            {loading ? <ActivityIndicator color={WHITE} /> : <AppText style={styles.textStyle}>{title}</AppText>}
        </TouchableOpacity>
    )
}

export default AppButton;
