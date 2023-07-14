import { StyleSheet, Text, View, ScrollView, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TOOLBAR } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'


const Rule = () => {

return (
    <Background>
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={BACKGROUND_TOOLBAR} style={styles.headline}>
                    <Header
                        containerStyle={styles.header} />
                    <Text style={styles.thele}>Thể lệ chương trình</Text>
                </ImageBackground>
            </View>
        </ScrollView>
    </Background>
)
}

export default Rule

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        height: '65%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height * 0.03,

    },
    image1: { marginLeft: '-5%' },
    header: {
        marginVertical: '16%',
        marginLeft: '-40%',

    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.2,
        marginLeft: '-45%',

    },
    thele: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE,

    },
})