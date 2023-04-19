import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

/**
 * The AppText component is a reusable component that can be used to render text with consistent styles across the application.
 * 
 * @params
 * * children (required): The text to be displayed.
 * * style (optional): An object containing one or more custom styles to be applied to the text.
 * * secondary (optional): A boolean value that determines whether the text should have secondary styles. If true, the text will have a different color and/or other styles defined in the stylesheet.
 * 
 * @returns
 * It renders text on the screen with defined styles
 */
function AppText({children, style, secondary}) {
    const textType = secondary ? styles.secondary : styles.primary; // defines the text styles based on it's type
    return (
        <Text style={[styles.textStyle, textType, style]}>{children}</Text>
    )
}

export default AppText;
