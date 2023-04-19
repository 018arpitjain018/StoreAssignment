import { StyleSheet } from 'react-native';
import { BORDER_RADIUS } from '../../Constants';
import { BLACK, WHITE } from '../../Constants/colors';

export default StyleSheet.create({
    /**
     * This is the main container style for the TextInput component. 
     * It sets the width to 100% of its parent element
     * and sets border width and border color to component
     */
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: BORDER_RADIUS,
        borderWidth: 1,
        borderColor: BLACK,
        width: '100%',
        marginVertical: 20,
        backgroundColor: WHITE,
        textAlign: 'center'
    }
})
