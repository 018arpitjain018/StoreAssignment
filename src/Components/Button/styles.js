import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, FONT_SIZE } from '../../Constants';
import { BLUE, WHITE, GRAY } from '../../Constants/colors';

export default StyleSheet.create({

    /**
     * This is the main container style for the button. It sets the width to 100% of its parent element.
     */
    container: {
        width: '100%',
        padding: 15,
        borderRadius: BORDER_RADIUS,
        alignItems: 'center',
    },

    /**
     * This style sets the color of the text on button to WHITE, transforms the text to uppercase.
     */
    textStyle: {
        color: WHITE,
        textTransform: 'uppercase',
        fontSize: FONT_SIZE,
        fontWeight: '500'
    },

    /**
     * This style sets the background color of the button to BLUE.
     */
    enable: {
        backgroundColor: BLUE,
    },

    /**
     * This style sets the background color of the button to GRAY.
     */
    disbale: {
        backgroundColor: GRAY,
    }
})
