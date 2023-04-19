import { StyleSheet } from 'react-native';
import { CONTAINER_PADDING } from '../../Constants';

export default StyleSheet.create({

    /**
     * This style object specifies the styling for the container of the component
     */
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: CONTAINER_PADDING
    }
})
