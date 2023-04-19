import { StyleSheet, Dimensions } from 'react-native';
import { BORDER_RADIUS, CONTAINER_PADDING, FONT_BOLD_WEIGHT, FONT_SIZE } from '../../Constants';
import { BLUE, GRAY, WHITE } from '../../Constants/colors';

const {width, height} = Dimensions.get('window');
const borderRadius = BORDER_RADIUS * 2
export default StyleSheet.create({
    
    /**
     * style that makes the container take up the entire screen
     */
    container: {
        flex: 1,
    },

    /**
     * style that sets the width to the screen width and the height to 65% of the screen height
     */
    heroSection: {
        width: width,
        height: height * 0.65
    },

    /**
     * style that sets the image to take up the entire space of its container
     */
    heroImage: {
        width: '100%',
        height: '100%'
    },

    /**
     * style for the header subtitle text, with a font size of FONT_SIZE, a weight of 500, and white color
     */
    haderSubTitle: {
        fontSize: FONT_SIZE,
        fontWeight: '500',
        color: WHITE
    },

    /**
     * style for the header title text, with a font size of twice FONT_SIZE, a weight of 600, and white color
     */
    haderTitle: {
        fontSize: FONT_SIZE * 2,
        fontWeight: '600',
        color: WHITE
    },

    /**
     * a style for the header information container, with a position of absolute, width of 100%, 
     * padding of CONTAINER_PADDING, and a semi-transparent black background
     */
    headerInfo: {
        position: 'absolute',
        width: '100%',
        padding: CONTAINER_PADDING,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },

    /**
     * style for the close menu button, with a position of absolute, 
     * right offset of 5% of the screen width, and top offset of 5% of the screen height
     */
    closeMenu: {
        position: 'absolute',
        right: width * 0.05,
        top: height * 0.05
    },

    /**
     * style for the close button, with a width and height of FONT_SIZE times 2
     */
    close: {
        width: FONT_SIZE * 2,
        height: FONT_SIZE * 2,
    },

    /**
     * style for the close button title text, with a font size of FONT_SIZE times 1.1
     */
    closeTitle: {
        fontSize: FONT_SIZE * 1.1,
    },

    /**
     * style for the header section, with a white background, 
     * padding of CONTAINER_PADDING, and a shadow
     */
    headerSection: {
        backgroundColor: WHITE,
        padding: CONTAINER_PADDING,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },

    /**
     * style that centers its children, intended to be used for a loading animation or spinner
     */
    loadingSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    /**
     * style for the content view, with a padding of CONTAINER_PADDING, 
     * a margin top of 2, width of the screen width, and a white background
     */
    contentView: {
        padding: CONTAINER_PADDING,
        marginTop: 2,
        width: width,
        backgroundColor: WHITE
    },

    /**
     * style for the footer section, with centered children and padding vertical of CONTAINER_PADDING
     */
    footerSection: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: CONTAINER_PADDING
    },

    /**
     * style for the logo image, with a width and height of 100, a border radius of 70% of borderRadius, 
     * and a margin vertical of CONTAINER_PADDING times 0.5
     */
    logoImage: {
        width: 100,
        height: 100,
        borderRadius: borderRadius * 0.7,
        marginVertical: CONTAINER_PADDING * 0.5
    },

    /**
     * style for the footer information container, with centered children and a margin vertical of CONTAINER_PADDING
     */
    footerInfoSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: CONTAINER_PADDING
    },

    /**
     * style for the footer title text, with a font weight of FONT_BOLD_WEIGHT
     */
    footerTitle: {
        fontWeight: FONT_BOLD_WEIGHT,
    },

    /**
     * style for the footer subtitle text, with a font size of FONT_SIZE minus 4, 
     * width of 100%, and a margin vertical of CONTAINER_PADDING times 0.2
     */
    footerSubTitle: {
        fontSize: FONT_SIZE - 4,
        width: '100%',
        marginVertical: CONTAINER_PADDING * 0.2
    },

    /**
     * style for the footer action section, with centered children and a margin bottom of CONTAINER_PADDING
     */
    footerActionSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: CONTAINER_PADDING
    },
    
    /**
     * style for the in-app purchase text, with a font size of FONT_SIZE times 0.5 and a margin top of 3
     */
    inAppPurschaseText: {
        fontSize: FONT_SIZE * 0.5,
        marginTop: 3
    },

    /**
     * style for the share sheet, with centered children, 
     * padding vertical of CONTAINER_PADDING times 3, and a white background
     */
    shareSheet: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: CONTAINER_PADDING * 3,
        backgroundColor: WHITE
    },

    /**
     * style for the share button, with a flexDirection of row, minWidth of 
     * the screen width times 0.4, height of the screen width times 0.13, 
     * gray background color, border radius of BORDER_RADIUS, and centered children
     */
    shareButton: {
        flexDirection: 'row',
        minWidth: width * 0.4,
        height: width * 0.13,
        backgroundColor: GRAY,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center'
    },

    /**
     * style for the share text, with centered text, margin horizontal of 10, and blue color
     */
    shareText: {
        textAlign: 'center',
        marginHorizontal: 10,
        color: BLUE
    }
})
