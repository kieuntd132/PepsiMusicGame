import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TOOLBAR } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header';
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation';

interface Item {
    id: number;
    title: string;
    titlelitle: string;
    button: string;
    image: any;
}


function ItemColor({ id, title, titlelitle, button, image }: Item) {
    const [buttonColor, setButtonColor] = useState('#004A98');
    const [buttonText, setButtonText] = useState('Chưa nhận');

    const onPressButton = () => {
        if (buttonText == 'Chưa nhận' || buttonColor == '#004A98') {
            setButtonText('Đã nhận');
            setButtonColor('#ED1941');
        } else {
            setButtonText('Chưa nhận');
            setButtonColor('#004A98');
        };
    };
    return (
        <View style={styles.item}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.titlelitle}>{titlelitle}</Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPressButton}>
                <Text style={[styles.textbtn, { color: buttonText === 'Chưa nhận' ? '#fff' : '#fff' }]}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}
const MyGiftRanking: React.FC<BeatListStackScreenProps<'MyGiftRanking'>> = ({ navigation, route }) => {
    const goNotification = () => {
        navigation.navigate('Notification');
    }
    const DATA: Item[] = [
        { id: 1, title: "Iphone 13 Promax", titlelitle: "Top 1 tuần - 28/11/2021", button: "Chưa nhận", image: require("../../../../../assets/Iphone_13ProMax.png") },
        { id: 2, title: "Samsung Galaxy Tab S7+", titlelitle: "Top 2 tuần - 21/11/2021", button: "Đã nhận", image: require("../../../../../assets/Samsung_Galaxy_TabS7+.png") },
    ];
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={BACK}
                    leftHeader={goNotification}
                    centerHeader={"Quà của tôi"}
                />
                <FlatList
                    style={{ marginHorizontal: Dimensions.get('window').width * 0.02 }}
                    horizontal={true}
                    data={DATA}
                    // renderItem={renderItem}
                    renderItem={({ item }) => <ItemColor id={item.id} title={item.title} titlelitle={item.titlelitle} button={item.button} image={item.image} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </Background>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: Colors.WHITE,
        width: Dimensions.get('window').width * 0.422,
        height: Dimensions.get('window').height * 0.3,
        marginLeft: Dimensions.get('window').width * 0.04,
        marginTop: Dimensions.get('window').height * 0.03,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: Colors.WHITE,
        borderRadius: 8,
        shadowColor: Colors.SHADOW,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5 // chỉ dùng cho android
    },
    image: {
        alignSelf: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginTop: -Dimensions.get('window').height * 0.014,
    },
    title: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        color: Colors.BLUE_BLUE,
        marginLeft: Dimensions.get('window').width * 0.02,
        marginBottom: Dimensions.get('window').height * 0.005,
        marginTop: Dimensions.get('window').height * 0.005,
    },
    titlelitle: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.BLUE_BLUE,
        marginLeft: Dimensions.get('window').width * 0.02,
        marginBottom: Dimensions.get('window').height * 0.005,
    },
    button: {
        width: Dimensions.get('window').width * 0.2,
        padding: '2%',
        // backgroundColor: Colors.BLUE_TEXT,
        marginLeft: Dimensions.get('window').width * 0.02,
        borderRadius: 5,
        alignItems: 'center'
    },
    textbtn: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 13.091,
        color: Colors.WHITE,
    },
});

export default MyGiftRanking;