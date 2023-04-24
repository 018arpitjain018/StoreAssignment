import React from 'react';
import { Image } from 'react-native';

import styles from './styles';

/**
 * The CarouselItem component renders an Image component with the provided image source and style.
 * 
 * @params
 * item (required): The image source to display.
 * @returns
 * The CarouselItem component returns an Image component with the specified image source and style.
 * 
 */
function CarouselItem({item}) {
    return (
        <Image source={item} style={styles.carouselItem} />
    )
}

export default CarouselItem;
