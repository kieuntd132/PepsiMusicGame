import { ImageBackground, StatusBar, StyleSheet} from 'react-native'
import React from 'react'
import { BACKGROUND } from '../../../../assets';

export interface BackgroundProps { 
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = (props) => {
    const { children } = props;
    return (
        <ImageBackground source={BACKGROUND} style={styles.container}>
            <StatusBar barStyle={'light-content'} translucent hidden={true}/>
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