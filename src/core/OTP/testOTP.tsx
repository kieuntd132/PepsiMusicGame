import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { userSelecter } from '../../../src/presentation/share-state/redux/reducers/userReducer';
import { rtdb } from '../API/Url/RealTimeDB';
import { Gift } from '../model/Gift';

const testOTP = () => {



    useEffect(() => {
        const getGift = async () => {
            let gift: Gift = {
                idGift: "1"
            };
            const getUsers = rtdb.ref('/Gift').once('value');
            await getUsers.then((snapshot: any) => {
                snapshot.forEach((item: any) => {
                    gift.idGift = item.id;
                    gift.des = item.val().des;
                    gift.image = item.val().image;
                    gift.title = item.val().title;
                    list.push(gift);
                })

            });
        }

        getGift();
        return () => {

        }
    }, [])


    const data = useSelector(userSelecter);

    let list: Gift[] = [];
    const clickTest = () => {

        console.log(list);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ borderWidth: 1, width: 100 }} onPress={clickTest}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-bb3c3.appspot.com/o/Image-Card_2.png?alt=media&token=0c4a561c-da40-4332-91a2-7e4b848dcccc' }} />
            </TouchableOpacity>
        </View>
    )
}

export default testOTP;

const styles = StyleSheet.create({});
