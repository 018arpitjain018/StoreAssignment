import React, {useState, useEffect} from 'react';
import { View } from 'react-native';

import AppText from '../Text';
import styles from './styles';

/**
 * The Avatar component is a functional React component that renders an avatar image with a title. 
 * The component takes in the following props:
 * 
 * @params
 * * title: a string representing the title of the avatar
 * * style: an object representing additional styles to apply to the avatar container
 * * avatarTitle: an object representing additional styles to apply to the avatar title
 * 
 * @returns
 * It renders an Avatar components by setting up first char of title in it.
 */
export default function Avatar({title, style, avatarTitle}) {
    const [_title, setTitle] = useState('')
    
    /**
     * This is used to set the title to the first character of the title prop passed to the component, 
     * if the title prop is not empty. 
     */
    useEffect(() => {
        if (title && title.length > 0) {
            let char = title[0]?.toUpperCase();
            setTitle(char)
        }
    }, []) // run this effect only once when the component mounts, indicated by passing an empty array as the second parameter

    return (
        <View style={[styles.container, style]}>
            <AppText style={[styles.avatarTitle, avatarTitle]}>{_title}</AppText>
        </View>
    )
}
