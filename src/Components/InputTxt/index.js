import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

/**
 * The InputTxt component renders a TextInput with the following props:
 * 
 * * style: An object that defines the style for the TextInput component.
 * * placeholder: The placeholder prop passed from the parent component.
 * * onChangeText: The onChangeText prop passed from the parent component.
 * * blurOnSubmit: A boolean that determines whether the text input should lose focus when submitted. It is set to true by default.
 * * ...props: This spreads any additional props that are passed to the component. (It accepts all from the property from react-native TextInput components)
 */
function InputTxt(props) {
    const {placeholder, onChangeText} = props;

    return (
        <TextInput
            style={styles.container}
            placeholder={placeholder}
            onChangeText={onChangeText} // methods excutes whnever the value of components changes
            blurOnSubmit={true}
            {...props}
        />
    )
}

export default InputTxt;
