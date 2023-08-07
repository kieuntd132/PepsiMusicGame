import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation'
import { BANNER, ICON_HOME, ICON_MUSIC, ICON_VOLUMN_HIGH, ICON_NOTIFICATION } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import Button from '../../../component/button/Button'
import Header from '../../../component/header/Header'
import { Video } from '../../../../core/model/Video'
import { Music } from '../../../../core/model/Music'
import { rtdb } from '../../../../core/API/Url/RealTimeDB'

const BeatList: React.FC<BeatListStackScreenProps<'BeatList'>> = ({ navigation, route }) => {
    const goBack = () => {

    }
    const goNotification = () => {
        navigation.navigate('Notification');
    }
    const goBeatOutstand = () => {
        navigation.navigate('NewBeat');
    }
    const goMostUser = () => {
        navigation.navigate('MostUsed');
    }
    const goRecordedRecently = () => {
        navigation.navigate('RecordedRecently');
    }
    const goPropose = () => {
        navigation.navigate('Propose');
    }
    interface Item {
        id: number,
        title: string,
        view: number,
        like: number,
        image: any
    }
    interface ItemList {
        id: number,
        title: string,
        author: string,
        view: number,
        like: number,
        image: any
    }




    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.item}>
            <View style={styles.card}>
                <View>
                    <Image source={{ uri: item.image }} style={styles.image} />

                    <Text style={styles.text}>{item.title}</Text>
                </View>

            </View>
            <View style={styles.gr}>
                <View style={styles.group}>
                    <Image source={EYE} style={styles.imageEye} />
                    <Text style={styles.view}>{item.view}</Text>
                </View >
                <View style={styles.group1}>
                    <Image source={HEART} style={styles.imageHeart} />
                    <Text style={styles.like}>{item.like}</Text>
                </View>

                <Image source={ICON_MIC} style={styles.imageMic} />
            </View>
        </View>
    );

    const Item = ({ item }: { item: ItemList }) => (
        <View style={styles.item1}>
            <View style={styles.card1}>
                <Image source={item.image} style={styles.image1} />
                <View style={styles.card2}>
                    <Text style={styles.title1}>{item.title}</Text>
                    <Text style={styles.titleMini}>{item.author}</Text>
                    <View style={styles.card3}>
                        <Image source={ICON_MIC} />
                        <Text style={styles.titleWatch}>{EYE}</Text>
                    </View>
                </View>
            </View>
            <Image source={MIC} style={styles.imageMic1} />
        </View>
    );

    const [list_Video, setlist_Video] = useState<Video[]>([])
    const [list_Music, setlist_Music] = useState<Music[]>([])

    useEffect(() => {
        const getVideo = async () => {
            const get = rtdb.ref('/Videos')
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
                    // console.log(listVideo);
                    setlist_Video(listVideo)
                });
        }

        getVideo();

        const getMusic = async () => {

            const get = rtdb.ref('/Musics')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let music: Music = {
                            idMusic: "1"
                        };
                        music.idMusic = item.idMusic;
                        music.author = item.val().author;
                        music.image = item.val().image;
                        music.name = item.val().name;
                        listMusic.push(music);
                    })
                    console.log(listMusic);
                    setlist_Music(listMusic);
                });
        }

        getMusic();
        return () => { }
    }, [])


    let listVideo: Video[] = [];
    let listMusic: Music[] = [];
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Beat list</Text>
            </View>
        )
    }
    return (
        <Background>
            <Header
                iconLeft={ICON_HOME}
                leftHeader={goBack}
                centerHeader={centerHeader()}
                iconRight={ICON_NOTIFICATION}
                rightHeader={goNotification}
            />
            <ScrollView style={styles.container}>
                <Image source={BANER} style={styles.imageBanner} />
                <View style={styles.boxButton}>
                    <Button containerStyle={styles.btn}
                        title='Beat mới nhất'
                        onPress={goBeatOutstand}
                        titleStyle={styles.titleStyle}
                        icon={ICON_MUSIC
                        }
                    />
                    <Button containerStyle={styles.btn}
                        title='Sử dụng nhiều'
                        onPress={goMostUser}
                        titleStyle={styles.titleStyle}
                        icon={VOLUME_HIGH}
                    />
                </View>
                <View style={styles.boxHistory}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.title}>Đã thu gần đây</Text>
                        <TouchableOpacity style={styles.btnSeeAll} onPress={goRecordedRecently}>
                            <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={list_Video}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.idVideo.toString()}
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                </View>
                <View style={styles.boxPropose}>
                    <View style={styles.boxTitle}>
                        <Text style={styles.title}>Đề xuất cho bạn</Text>
                        <TouchableOpacity style={styles.btnSeeAll} onPress={goPropose}>
                            <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listPropose}>
                        <FlatList
                            data={list_Music}
                            renderItem={Item}
                            keyExtractor={(item) => item.idMusic.toString()}
                        />
                    </View>
                </View>
            </ScrollView>
        </Background>
    )
}

export default BeatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Dimensions.get('screen').scale * 5,
    },
    header_1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontWeight: '600',
        fontSize: 18,
        color: Colors.WHITE,
        textAlign: 'center',
    },

    beatlist: {
        fontFamily: 'Montserrat',
        fontSize: 18,
        fontWeight: '900',
        lineHeight: 27,
        color: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.04,
        marginLeft: Dimensions.get('window').width * 0.15,
    },


    imageBanner: {
        resizeMode: 'stretch',
        width: "100%",
        height: Dimensions.get('screen').height * 0.25,
        borderRadius: 8,
    },
    boxButton: {
        marginTop: Dimensions.get('screen').height * 0.03,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btn: {
        width: "45%",
        height: Dimensions.get('screen').height * 0.05,
    },
    titleStyle: {

    },
    boxTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    title: {
        fontSize: 16,
        color: Colors.WHITE,
        fontWeight: '700',
        lineHeight: 24,
    },
    seeAll: {
        fontSize: 12,
        color: Colors.WHITE,
        fontWeight: '400',
        lineHeight: 18,
    },
    btnSeeAll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxHistory: {},
    boxPropose: {},
    listPropose: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        margin: Dimensions.get('screen').width * 0.03,
        width: Dimensions.get('screen').width * 0.4 + 4,
        height: Dimensions.get('screen').height * 0.22,
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 8,
        backgroundColor: Colors.BACKGROUND_BOX
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width * 0.39,
        height: Dimensions.get('screen').height * 0.145,
        borderRadius: 10,

    },
    imageMic: {
        marginRight: - Dimensions.get('screen').width * 0.045,
    },
    imageEye: {

    },
    imageHeart: {

    },
    text: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
        color: Colors.WHITE,
        marginTop: Dimensions.get('screen').width * 0.01,

    },
    gr: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Dimensions.get('window').height * 0.001,

    },
    group: {
        marginTop: Dimensions.get('window').height * 0.023,
        marginLeft: - Dimensions.get('window').height * 0.022,
        width: '30%',
        flexDirection: 'row',
        backgroundColor: Colors.BAR_RED, //rgba(237, 25, 65, 1)
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        fontSize: 8,
    },
    like: {

        fontSize: 8,
    },
    group1: {
        marginTop: Dimensions.get('window').height * 0.023,
        marginLeft: - Dimensions.get('window').height * 0.024,
        width: '30%',
        flexDirection: 'row',
        backgroundColor: Colors.BACKGROUND_HEART, //rgba(16, 76, 231, 1)
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    item1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.WHITE,
        width: Dimensions.get('window').width * 0.9,
        backgroundColor: Colors.BLUE_BACKGROUND,
    },
    card1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    card2: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: Dimensions.get('window').width * 0.04,
    },
    card3: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.BLUE_TITLE,
        borderRadius: 4,
        backgroundColor: Colors.BLUE_TITLE,
        padding: Dimensions.get('window').width * 0.01,
    },
    image1: {
        marginLeft: -Dimensions.get('window').width * 0.12,
    },
    title1: {
        fontFamily: 'Montserrat',
        color: Colors.WHITE,
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 21,
    },
    titleMini: {
        fontFamily: 'Montserrat',
        color: Colors.WHITE,
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 15,
    },
    titleWatch: {
        fontFamily: 'Montserrat',
        color: Colors.WHITE,
        fontSize: 8,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 9.6,
    },
    imageMic1: {
        marginRight: -Dimensions.get('window').width * 0.08,

    },

    boxReact: {
        flexDirection: 'row',
        width: "70%",
    },

})