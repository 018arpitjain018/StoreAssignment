import { StyleSheet } from 'react-native';
import { CONTAINER_PADDING } from '../../Constants';

export default StyleSheet.create({
    /**
     * The style object for the container view that wraps the entire component.
     */
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    /**
     * The style object for the background image component.
     */
    backgroundImage: {
        ...StyleSheet.absoluteFill
    },
    /**
     * The style object for the view that contains the action button(s).
     */
    actionView: {
        paddingHorizontal: CONTAINER_PADDING,
        marginVertical: CONTAINER_PADDING * 2
    }
})
