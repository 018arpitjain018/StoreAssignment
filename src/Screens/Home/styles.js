import { StyleSheet } from 'react-native';
import { CONTAINER_PADDING, FONT_SIZE } from '../../Constants';

export default StyleSheet.create({
    /**
     * An object with styles for the container element of the component
     */
    container: {
        flex: 1,
        padding: CONTAINER_PADDING
    },

    /**
     * An object with styles for the date text element of the component.
     */
    dateText: {
        fontSize: FONT_SIZE,
        fontWeight: '500'
    },

    /**
     * An object with styles for the header section of the component, which is a row at the top containing the date and other information.
     */
    headerSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: CONTAINER_PADDING,
    },

    /**
     * An object with styles for the day of the date in the header section.
     */
    dateDay: {
        fontSize: FONT_SIZE * 2,
        fontWeight: '600'
    },

    /**
     * An object with styles for the main content section of the component, which follows the header section.
     */
    content: {
        flex: 1
    }
})
