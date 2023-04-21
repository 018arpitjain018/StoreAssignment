import { StyleSheet, Dimensions } from 'react-native';

const {width} = Dimensions.get('screen');
export default StyleSheet.create({
    /**
     * These styles are intended to be used for a logo Image component
     */
    container: {
        width: width * 0.7,
        height: width * 0.20,
    }
})
