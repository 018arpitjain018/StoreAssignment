import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../../Constants';
import { PROMARY_TEXT, SECONDAY_TEXT } from '../../Constants/colors';

export default StyleSheet.create({

    /**
     * This style defines the basic font size for all text in the app.
     */
    textStyle: {
        fontSize: FONT_SIZE,
    },

    /**
     * This style defines the color for primary text in the app. 
     * The color is defined as PROMARY_TEXT.
     */
    primary: {
        color: PROMARY_TEXT
    },

    /**
     * This style defines the color and font size for secondary text in the app. 
     * The color is defined as SECONDAY_TEXT and the font size is FONT_SIZE - 2.
     */
    secondary: {
        color: SECONDAY_TEXT,
        fontSize: FONT_SIZE - 2
    }
})
