import { StyleSheet, Dimensions } from 'react-native';
import { BORDER_RADIUS, CONTAINER_PADDING, FONT_BOLD_WEIGHT, FONT_SIZE } from '../../Constants';
import { WHITE } from '../../Constants/colors';

const {height} = Dimensions.get('window');
const borderRadius = BORDER_RADIUS * 2

export default StyleSheet.create({
    
    /**
     * Style for the container view of the post card. It has borderRadius and backgroundColor properties.
     */
    container: {
        borderRadius: borderRadius,
        backgroundColor: WHITE
    },

    /**
     * Style for the thumbnail image in the post card. It has width, height, borderTopLeftRadius, and borderTopRightRadius properties.
     */
    thumbnailImage: {
        width: '100%',
        height: height * 0.4,
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
    },

    /**
     * Style for the main section of the post card that contains the logo, title, and subtitle. 
     * It has flexDirection, alignItems, padding, and width properties.
     */
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: CONTAINER_PADDING * 0.7,
        width: '100%',
    },

    /**
     * Style for the section that contains the logo, title, and subtitle. 
     * It has flexDirection, alignItems, and width properties.
     */
    infoSection: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
    },

    /**
     * Style for the logo image in the post card. 
     * It has width, height, and borderRadius properties.
     */
    logo: {
        width: 60,
        height: 60,
        borderRadius: borderRadius * 0.7,
    },

    /**
     * Style for the section that contains the title and subtitle. 
     * It has marginLeft and width properties.
     */
    info: {
        marginLeft: 10,
        width: '65%'
    },

    /**
     * Style for the title text in the post card. 
     * It has fontWeight property.
     */
    title: {
        fontWeight: FONT_BOLD_WEIGHT,
    },

    /**
     * Style for the subtitle text in the post card. 
     * It has fontSize and width properties.
     */
    subTitle: {
        fontSize: FONT_SIZE - 4,
        width: '100%'
    },

    /**
     * Style for the section that contains the refresh button and the in-app purchase text. 
     * It has width, justifyContent, and alignItems properties.
     */
    actionView: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    /**
     * Style for the in-app purchase text in the post card. 
     * It has fontSize and marginTop properties.
     */
    inAppPurschaseText: {
        fontSize: FONT_SIZE * 0.5,
        marginTop: 3
    }
})
