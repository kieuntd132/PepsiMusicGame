import { StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors';

export interface TextTitleProps extends TextProps {
    titleStyle?: StyleProp<TextStyle>,
    title?: string,
}

const TextTitle: React.FC<TextTitleProps> = (props) => {
    const { titleStyle, title } = props;

    return (
        <Text style={[styles.title, titleStyle]}>{title}</Text>
    )
}

export default TextTitle

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: Colors.BLUE_PEPSI,
    },
})