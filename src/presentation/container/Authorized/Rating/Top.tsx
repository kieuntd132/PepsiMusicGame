import { StyleSheet, Text, View, FlatList, Dimensions, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { BACKGROUND_RANK, EYE, HEART, ICON_HOME, ICON_NOTIFICATION, IMAGE_BUC, IMAGE_RANK_1, IMAGE_RANK_2, IMAGE_RANK_3, IMAGE_RANK_4 } from '../../../../../assets'
import Background from '../../../component/background/Background';
import Header from '../../../component/header/Header'
import { Colors } from '../../../resource/value/Colors';
import {  ChartStackScreenProps} from '../../../navigation/stack/ChartNavigation'
import { Rank } from '../../../../core/model/Rank';
import { Video } from '../../../../core/model/Video';
import { rtdb } from '../../../../core/API/Url/RealTimeDB';


const Top : React.FC< ChartStackScreenProps<'Top'>> = ({ navigation, route }) => {


    const onProfileN = () => {
        navigation.navigate('Profile');
        
    }
    const goBack = () => {
        navigation.goBack();
    }
   
      const Notification = () => {
        navigation.navigate('Notification');
    }
    interface Item {
        id: number,
        name: string,
        rank: number,
        image: any,
        view: number,
       
    }

    let listVideo: Video[] = [];
    let listRank: Rank[] = [];

    const [list_Video, setlist_Video] = useState<Video[]>([]);
    const [list_Rank, setlist_Rank] = useState<Rank[]>([])

    useEffect(() => {
        const getVideo = async () => {
            const get = await rtdb.ref('/Video')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let video: Video = {
                            idVideo: "1"
                        };
                        video.idVideo = item.idVideo;
                        video.createAt = item.val().createAt;
                        video.image = item.val().image;
                        video.like = item.val().like;
                        video.title = item.val().title;
                        video.userId = item.val().userId;
                        video.view = item.val().view;
                        listVideo.push(video);
                    })
                    console.log(listVideo);
                    setlist_Video(listVideo);
                });
        }

        getVideo();

        const getRank = async () => {
            const get = await rtdb.ref('/Rank')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let rank: Rank = {
                            idRank: "1"
                        };
                        rank.idRank = item.idRank;
                        rank.name = item.val().name;
                        rank.image = item.val().image;
                        rank.view = item.val().view;
                        rank.rank = item.val().rank;
                        listRank.push(rank);
                    })
                    // console.log(listRank);
                    setlist_Rank(listRank);
                });
        }

        getRank();

        return () => { }
    }, [])

 

   



    const renderItem = ({ item }: { item: Item }) => (
        <View style={{}}>
            <TouchableOpacity style={styles.item} onPress={onProfileN}>
                <View style={styles.borderRank} >
                    <Text style={styles.txt} >{item.rank}</Text>
                    <Image source={IMAGE_RANK_4} style={styles.imgBorderRank} />
                </View>
                <View style={styles.boxContent} >
                    <Image source={item.image} style={styles.imgAvatar} />
                    <View style={styles.boxInfor}>
                        <Text style={styles.txtName}>{item.name}</Text>
                        <View style={styles.boxView}>
                            <Image source={EYE} />
                            <Text style={styles.txtView}>{item.view}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
    interface ItemChart {
        id: number;
        title: string;
        author: string;
        image: any;
        imagegoc: any;
        textWatch: string;
        textLike: string;
        
    }

   

    const renderItemChart = ({ item }: { item: ItemChart }) => (
        <View style={styles.gr}>
            <Image style={styles.img1} source={item.image} />
            <Image source={item.imagegoc} style={styles.imgGoc} />
            <Text style={styles.txtID}>{item.id}</Text>
            <View style={styles.grbottom}>
                <View style={styles.grleft}>
                    <Text style={styles.text1}>{item.title}</Text>
                    <Text style={styles.text2}>{item.author}</Text>
                </View>
                <View style={styles.grright}>
                    <View style={styles.grWatch}>
                        <Image style={styles.eye} source={EYE} />
                        <Text style={styles.txt1}>{item.textWatch}</Text>
                    </View>
                    <View style={styles.grLike}>
                        <Image style={styles.eye} source={HEART} />
                        <Text style={styles.txt1}>{item.textLike}</Text>
                    </View>
                </View>
            </View>
        </View>
    );




    const [onChoose, setonChoose] = React.useState(1)

    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                leftHeader={goBack}
                centerHeader={"Nhạc thinh hành"}
                iconRight={ICON_NOTIFICATION}
                rightHeader={Notification}
            />
            <View style={styles.boxButton}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={onChoose == 1 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(1)}>
                        <Text style={onChoose == 1 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Người có lượt tương tác nhiều nhất</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={onChoose == 2 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(2)}>
                        <Text style={onChoose == 2 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Video có lượt tương tác nhiều nhất</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.container}>
                {
                    onChoose == 1 ?
             <View style={{ paddingHorizontal: 22 }}>
                <ImageBackground style={{ width: Dimensions.get('screen').width, paddingHorizontal: 22 }} source={BACKGROUND_RANK}>
                    <View style={styles.boxTop}>
                        <Text style={styles.txtTop}>Hạng của tôi : <Text style={styles.txtRank}>1000000</Text></Text>
                    </View>
                    <View style={styles.boxRanks}>
                        <View style={styles.boxRank}>
                            <View style={styles.boxRank2}>
                                <Image source={IMAGE_RANK_2} style={styles.imgRank2} />
                                <Text style={styles.textName2}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank1}>
                                <Image source={IMAGE_RANK_1} style={styles.imgRank1} />
                                <Text style={styles.textName1}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank3}>
                                <Image source={IMAGE_RANK_3} style={styles.imgRank3} />
                                <Text style={styles.textName3}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                        </View>
                        <Image source={IMAGE_BUC} style={styles.imgBuc} />
                    </View>
                </ImageBackground>
                <FlatList
                    data={list_Rank}
                    renderItem={renderItem}
                  
                    keyExtractor={(item) => item.idRank.toString()}
                />
              
             </View>
            :
            <FlatList
                 data={list_Video}
                renderItem = { renderItemChart }
              
                keyExtractor={(item) => item.idVideo.toString()}
            />
}
        </View>


        </Background >




    )
}

export default Top

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 22,
    },
    boxTop: {
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 5,
        alignSelf: 'flex-end',
        marginTop: '5%',
    },
    txtTop: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.BLUE_PEPSI
    },
    txtRank: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.BAR_RED
    },
    boxRanks: {

    },
    boxRank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    boxRank2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    imgRank2: {
    },
    textName2: {
        fontWeight: '500',
        fontSize: 10,
        color: 'rgba(255, 222, 229, 1)'
    },
    textView: {
        fontWeight: '700',
        fontSize: 10,
        color: Colors.WHITE,
        marginTop: 10,
    },
    boxRank1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgRank1: {},
    textName1: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.YELLOW
    },
    boxRank3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
    },
    imgRank3: {},
    textName3: {
        fontWeight: '700',
        fontSize: 12,
        color: 'rgba(173, 225, 255, 1)'
    },
    imgBuc: {

    },
    item: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.1,
        marginLeft:  Dimensions.get('screen').width * 0.03,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    borderRank: {
    },
    txt: {
        position: 'absolute',
        zIndex: 1,
        color: Colors.WHITE,
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
    },
    imgBorderRank: {},
    boxContent: {
        marginTop: '10%',
        flexDirection: 'row',
        width: "90%",

        alignItems: 'center',
    },
    imgAvatar: {

        zIndex: 1
    },
    boxInfor: {
        width: "75%",
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: Colors.DARK_BLUE_MODE,
        marginStart: "-10%",
        borderRadius: 8,
        borderColor: Colors.WHITE,
    },
    txtName: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.WHITE,
        marginStart: '20%',
    },
    boxView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 3,
        marginEnd: "3%",
    },
    imgb: {
        color: Colors.RED
    },
    txtView: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.BLUE_PEPSI,
    },

    boxButton: {
        marginTop:  Dimensions.get('screen').height * 0.01,
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: Dimensions.get('screen').width * 0.55,
        height: Dimensions.get('screen').height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Dimensions.get('screen').height * 0.02,
        marginEnd: Dimensions.get('screen').width * 0.05,
        borderRadius: 6,
    },
    btnChoose: {
        backgroundColor: Colors.WHITE,
    },
    txtButton: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: Colors.WHITE
    },
    txtButtonChoose: {
        color: Colors.BLUE_PEPSI
    },

    gr: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.SOLID_1,
        width: Dimensions.get('screen').width * 1,
        height: Dimensions.get('screen').height * 0.25,
        marginHorizontal: Dimensions.get('screen').width * 0.01,
        marginBottom: Dimensions.get('screen').height * 0.015,
       
    },
    txtID: {
        fontFamily: 'Monterrat',
        fontSize: 20,
        fontWeight: '700',
        lineHeight: 30,
        color: Colors.WHITE,
        position: 'absolute',
        top: -1,
        left: 8,
    },
    img1: {
        position: 'relative',
        width: Dimensions.get('screen').width * 0.895,
        height: Dimensions.get('screen').height * 0.247,
        borderWidth: 1,
        borderRadius: 8,
    },
    imgGoc: {
        position: 'absolute',
        top: -1,
        left: -1,
    },
    grbottom: {
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        position: 'absolute',
        bottom: -1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('screen').width * 0.895,
        height: Dimensions.get('screen').height * 0.07,
        backgroundColor: Colors.BANNER_1,
        opacity: 0.800000011920929,
        paddingHorizontal: Dimensions.get('screen').width * 0.07,
    },
    grleft: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    text1: {
        color: Colors.WHITE,
        fontFamily: 'Monterrat',
        fontSize: 12,
        fontWeight: '800',
        lineHeight: 19,
    },
    text2: {
        color: Colors.TEXT,
        fontFamily: 'Monterrat',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
    },
    grright: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    grWatch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RED1,
        padding: Dimensions.get('screen').width * 0.015,
        borderColor: Colors.RED1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,

    },
    grLike: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BLUEH,
        padding: Dimensions.get('screen').width * 0.015,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    eye: {
        width: 10,
        height: 10,
        marginRight: Dimensions.get('screen').width * 0.015,

    },
    txt1: {
        color: Colors.WHITE,
        fontFamily: 'Monterrat',
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 9.6,
    },

})
