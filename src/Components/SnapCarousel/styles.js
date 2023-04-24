import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')
export default StyleSheet.create({

    /**
     * A style object that sets the width and height of the carousel item 
     * to the width and height of the device screen using the Dimensions API.
     */
    carouselItem: {
        width: width,
        height: height
    }
})
