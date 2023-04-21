import React from 'react';
import { Image } from 'react-native';

import { APP_LOGO } from '../../Assets';
import styles from './styles';

/**
 * It displays the app's logo image. It receives no props and renders an Image component.
 * 
 * @params
 * This method does not take any parameters.
 * @returns 
 * This method does not return any value.
 */
function Logo() {
    return (
        <Image source={APP_LOGO} resizeMode='center' style={styles.container} />
    )
}

export default Logo;
