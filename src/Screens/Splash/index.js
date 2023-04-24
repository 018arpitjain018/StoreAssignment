import React, {useEffect, useState, useRef} from 'react';
import { View, Animated } from 'react-native';
import {AppButton, SnapCarousel} from '../../Components';

import Cipher from '../../utils/Security';
import styles from './styles';
import { BACKGROUND_IMAGE } from '../../Assets';

function Splash({loaded}) {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false);
    const fadeInAnim = useRef(new Animated.Value(0)).current;

    /**
     * It is used to load the app data when the component mounts for the first time
     */
    useEffect(() => {
        loadAppData()
    }, [])

    useEffect(() => {
        Animated.timing(fadeInAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
    }, [fadeInAnim]);

    /**
     * This function loads the public keys required for encryption of user data. 
     * It uses the Cipher module to fetch the public keys. 
     * It updates the component state to reflect the loading status and any errors that may occur.
     * 
     * @params
     * This method does not take any parameters.
     * @returns
     * This method does not return any value.
     */
    const loadAppData = () => {
        Cipher.getPublicKeys()
            .then(() => {
                setIsLoading(false);
                setIsError(false);
            })
            .catch(() => {
                setIsLoading(false)
                setIsError(true)
            })
    }

    /**
     * This function sets the state variables isError and isLoading to false and true, respectively, 
     * and then calls the loadAppData function.
     * 
     * @params
     * This method does not take any parameters.
     * @returns
     * This method does not return any value.
     */
    const tryAgain = () => {
        setIsError(false);
        setIsLoading(true);
        loadAppData();
    }

    /**
     * This function is used to call the loaded function passed as a prop, 
     * which is used to indicate that the app has finished loading 
     * and it is safe to navigate to the main screen of the app.
     * 
     * @params
     * This method does not take any parameters.
     * @returns
     * This method does not return any value.
     */
    const navigateToApp = () => {
        loaded && loaded()
    }

    return (
        <View style={styles.container}>
            <SnapCarousel data={BACKGROUND_IMAGE} />
            <Animated.View style={[styles.actionView, {opacity: fadeInAnim}]}>
                <AppButton title={isError ? 'Try Again!' : 'Continue'} disbale={isLoading} loading={isLoading} onPress={() => isError ? tryAgain() : navigateToApp()}  />
            </Animated.View>
        </View>
    )
}

export default Splash;
