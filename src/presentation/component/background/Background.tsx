import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BACKGROUND } from '../../../../assets';

export interface PrimaryBackgroundProps { 
    children: React.ReactNode;
}

const Background: React.FC<PrimaryBackgroundProps> = (props) => {
    const { children } = props;
    return (
        <ImageBackground source={BACKGROUND} style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent/>
            {children}
        </ImageBackground>
    )
}

export default Background

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})