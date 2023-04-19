import { StyleSheet } from 'react-native';
import { FONT_SIZE } from '../../Constants';
import { GRAY } from '../../Constants/colors';

export default StyleSheet.create({

    /**
     * This style sets the width and height of the container
     * used in avatar compoent
     */
    container: {
        width: FONT_SIZE * 2.5,
        height: FONT_SIZE * 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: FONT_SIZE * 2.5,
        backgroundColor: GRAY,
    },

    /**
     * These styles are used in the Avatar component 
     * to style the title text.
     */
    avatarTitle: {
        fontSize: FONT_SIZE * 1.5,
        fontWeight: '600'
    }
})
