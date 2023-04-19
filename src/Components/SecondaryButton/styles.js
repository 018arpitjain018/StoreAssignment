import { StyleSheet } from 'react-native';
import { CONTAINER_PADDING, FONT_BOLD_WEIGHT, FONT_SIZE } from '../../Constants';
import { BLUE, GRAY, WHITE } from '../../Constants/colors';

export default StyleSheet.create({

    /**
     * This defines the common styles for the button container. 
     * It includes padding, border radius, and alignment properties to center the button content.
     */
    container: {
        paddingHorizontal: CONTAINER_PADDING * 0.7,
        paddingVertical: CONTAINER_PADDING * 0.3,
        borderRadius: CONTAINER_PADDING,
        justifyContent: 'center',
        alignItems: 'center'
    },

    /**
     * This defines the styles for the text content of the button. 
     * It includes text transformation, font size, and font weight.
     */
    title: {
        textTransform: 'uppercase',
        fontSize: FONT_SIZE - 3,
        fontWeight: FONT_BOLD_WEIGHT,
    },

    /**
     * This defines the background color for a primary button. 
     * It is used for buttons that are meant to be the primary action on a screen.
     */
    primaryColor: {
        backgroundColor: BLUE,
    },

    /**
     * This defines the background color for a secondary button. 
     * It is used for buttons that are meant to be a secondary action or a less important action on a screen.
     */
    secondaryColor: {
        backgroundColor: GRAY,
    },

    /**
     * This defines the text color for a primary button. 
     * It is typically white or light-colored to provide contrast against the primary background color.
     */
    primaryTextColor: {
        color: WHITE
    },

    /**
     * This defines the text color for a secondary button. 
     * It is typically a darker color to provide contrast against the secondary background color.
     */
    secondaryTextColor: {
        color: BLUE
    }
})
