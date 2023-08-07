import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Background from '../../../component/background/Background'
import { EYE, HEART, ICON_HOME, ICON_NOTIFICATION, LICH, PLAY, REPORT, share, taive, yeuthich } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../../component/header/Header'
import DialogReport from '../../../component/dialog/DialogReport'
import DialogThanks from '../../../component/dialog/DialogThanks'
import { VideoListStackScreenProps } from '../../../navigation/stack/VideoListNavigation';
import { Video } from '../../../../core/model/Video'
import { rtdb } from '../../../../core/api/url/RealTime'



const VideoListProfile: React.FC<VideoListStackScreenProps<'VideoListProfile'>> = ({navigation, route}) => {

    const [onChoose, setonChoose] = React.useState(1)

    const [checked, setChecked] = React.useState('');

    const [modalVisible, setModalVisible] = useState(false);


    const [title, setTitle] = useState<string>();


    const [btnLeft, setBtnLeft] = useState<string>();
    const [btnRight, setBtnRight] = useState<string>();
    const [onHuy, setonHuy] = useState(false);
    const [onBack, setonBack] = useState(false);
    const [onSubmit, setonSubmit] = useState(false);
    const [isExit, setisExit] = useState(false);
    const [onReport, setonReport] = useState(false);
    const [value, setvalue] = useState("Video spam");


    const onClick = (type: string) => {

        if (type === "submit") {
            setTitle("Báo cáo vi phạm");
            setBtnLeft("Quay lại");
            setBtnRight("Xác nhận");
            setonSubmit(true);
            setisExit(true);
            setModalVisible(true);
            setvalue(value)

        }
    };



    const onCancel = () => {
        setonHuy(false);
        setonBack(false);
        setonSubmit(false);
        setisExit(false);
        setModalVisible(false);
    };

    const onExit = () => {
        setisExit(false);
        setModalVisible(false);
    }

    const onCancelReport = () => {
        setonReport(false);
        
    };

    const onDeleteReport = () => {
        setonReport(false);
        
    };


    const onDelete = () => {
        if (onHuy) {
            setonHuy(false);
            setModalVisible(false);
            
        }
        if (onBack) {
            setonBack(false);
            setModalVisible(false);
            
        }
        if (onSubmit) {
            setonSubmit(false);
            setisExit(false);
            setModalVisible(false);
            setonReport(true);

        }
        if (onReport) {
            setonReport(false);
            setisExit(false);
        }

    };






    interface Item {
        id: number,
        title: string,
        author: string,
        image: any,
        createAt: string,
        view: number,
        like: number,
    }


    const [list_Video, setlist_Video] = useState<Video[]>([]);



    let listVideo: Video[] = [];
    useEffect(() => {

        const getVideo = async () => {
            const get = rtdb.ref('/Video')
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
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
                        console.log();
                    })
                    setlist_Video(listVideo);
                });
        }

        getVideo();

        return () => { }
    }, []);


    const renderItem = ({ item }: { item: Item }) => (
        <View style={styles.item}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => setonLyric(false)}
                    style={styles.btnHeader}>
                    <Text style={!onLyric ?
                        styles.txtHeaderChoose : styles.txtHeader}>Video</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    onPress={() => setonLyric(true)}
                    style={styles.btnHeader}>
                    <Text style={onLyric ?
                        styles.txtHeaderChoose : styles.txtHeader}>Lời bài hát</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxImage}>
                {!onLyric ?
                    <View>
                        <TouchableOpacity style={styles.btnPlay}>
                            <Image source={PLAY} />
                        </TouchableOpacity>
                        <Image source={{uri: item.image}} style={styles.img} />

                    </View>

                    :
                    <View style={styles.boxLyric}>
                        <View style={{ marginTop: Dimensions.get("screen").height * 0.02 }}>
                            <Text style={styles.loi}>Lại là Ducky và sau nhiều lần </Text>
                            <Text style={styles.loi}>đã bị trói buộc thì</Text>
                            <Text style={styles.loi}>Thử đoán xem hôm nay</Text>
                            <Text style={styles.loi}>{getTextWithBoldAndUpper1(text1, boldAndUpperTexts1)}</Text>
                            <Text style={styles.loi}>Three of them say to me</Text>
                            <Text style={styles.loi}>"Baby I choose this rhymes"</Text>
                            <Text style={styles.loi}>Để rồi thì chú vịt vàng</Text>
                            <Text style={styles.loi}>lại làm cho cả sở thú nhịp nhàng</Text>
                            <Text style={styles.loi}>Nhưng mà rồi một ngày vịt bị cuốn phăng đi</Text>
                            <Text style={styles.loi}>Quên đi bao yêu thương xung quanh</Text>
                            <Text style={styles.loi}>chỉ để chạy theo đống money</Text>
                            <Text style={styles.loi}>Bao nhiêu suy tư, bây giờ, cần đi làm ăn gì</Text>
                            <Text style={styles.loi}>Ta bay theo hương, bay theo hoa</Text>
                            <Text style={styles.loi}>just like a bee for honey</Text>
                        </View>
                        <View style={{ marginTop: Dimensions.get("screen").height * 0.02 }}>
                            <Text style={styles.loi}>And just like that</Text>
                        </View>

                    </View>
                }

            </View>


            <LinearGradient colors={[Colors.BACKGROUND_FOOTER_1, Colors.BACKGROUND_FOOTER_2]}
                style={styles.boxFooter}>

                <View style={styles.box_1}>
                    <View style={styles.boxInfor}>
                        <Text style={styles.txtTitle}>{item.title}</Text>
                        <Text style={styles.txtAuthor}>{item.createAt}</Text>
                    </View>
                    <View style={styles.boxReact}>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Image source={yeuthich} />
                            <Text style={styles.textIcon}>Thích</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Image source={share} />
                            <Text style={styles.textIcon}>Chia sẻ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxReact_1}>
                            <Image source={taive} />
                            <Text style={styles.textIcon}>Tải về</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.boxReact_1} onPress={() => onClick("submit")}>
                            <Image source={REPORT} />
                            <Text style={styles.textIcon}>Báo cáo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.boxReact_2}>
                    <View style={styles.boxText_1}>
                        <Text style={styles.txt} >AiVan.01</Text>
                    </View>
                    <View style={styles.boxRed}>
                        <View style={styles.boxRed_1} >
                            <Image source={LICH} />
                            <Text style={styles.txtRed}>{item.createAt}</Text>
                        </View>
                        <View style={styles.boxRed_1} >
                            <Image source={EYE} />
                            <Text style={styles.txtRed}>{item.view}</Text>
                        </View>
                        <View style={styles.boxRed_1} >
                            <Image source={HEART} />
                            <Text style={styles.txtRed}>{item.like}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );



    const [onLyric, setonLyric] = React.useState(false);
    const [onPlay, setonPlay] = React.useState(false);


    const text1 = "thằng Ducky này có thể nói được gì";
    const boldAndUpperTexts1 = ["thằng Ducky này có thể nói được gì"];
    const regex1 = new RegExp(`(${boldAndUpperTexts1.join('|')})`, 'gi');

    const getTextWithBoldAndUpper1 = (text1: string, boldAndUpperTexts1: any) => {
        const parts1 = text1.split(regex1);
        return parts1.map((part, index) => {
            const isBoldAndUpper1 = boldAndUpperTexts1.includes(part);
            return isBoldAndUpper1 ? (
                <Text key={index} style={{ fontWeight: 'bold', fontSize: 16, color: '#ffe512' }}>{part}</Text>
            ) : (
                <Text key={index}>{part}</Text>
            );
        });
    };

    const goBack = () => {
        navigation.navigate('Record');
    }
    const Notification = () => {
        navigation.navigate('Notification');
    }

    return (
        <Background>


            <Header
                iconLeft={ICON_HOME}
                leftHeader={goBack}
                centerHeader={"Video List"}
                iconRight={ICON_NOTIFICATION}
                rightHeader={Notification}
            />
            <View style={styles.boxButton}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={onChoose == 1 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(1)}>
                        <Text style={onChoose == 1 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Video mới</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={onChoose == 2 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(2)}>
                        <Text style={onChoose == 2 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Yêu thích</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={onChoose == 3 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(3)}>
                        <Text style={onChoose == 3 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Xem nhiều</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={list_Video}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.idVideo.toString()}
                />
            </View>
            :
            <FlatList
                 data={list_Video}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.idVideo.toString()}
            />
            :
            <FlatList
                   data={list_Video}
                   renderItem={renderItem}
                   keyExtractor={(item) => item.idVideo.toString()}
            />



            {
                modalVisible ?
                    <DialogReport
                        title={title}
                        btnLeft={btnLeft}
                        btnRight={btnRight}
                        isVisibile={modalVisible}
                        onPressL={onCancel}
                        onPressR={onDelete}
                        isExit={isExit}
                        onPressE={onExit}

                    />

                    :
                    <View></View>
            }
            {
                onReport ?
                    <DialogThanks
                        title="Cảm ơn bạn đã báo cáo bình luận này"
                        isValue={value}
                        btnLeft="Quay lại"
                        btnRight="Xác nhận"
                        isVisibile={onReport}
                        onPressL={onCancelReport}
                        onPressR={onDeleteReport}
                        isExit={true}
                    />
                    :
                    <View></View>
            }

        </Background>
    )
}

export default VideoListProfile

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },

    item: {
        width: Dimensions.get('screen').width,
        marginBottom: Dimensions.get('screen').height * 0.02,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_HEADER,
        padding: "3%",
    },
    btnHeader: {
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtHeader: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        color: Colors.TEXT_MINI,
        marginHorizontal: 30
    },
    txtHeaderChoose: {
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        marginHorizontal: 30
    },
    line: {
        height: '90%',
        borderEndWidth: 1,
        borderColor: Colors.WHITE
    },
    boxImage: {
        width: "100%",
        height: Dimensions.get('screen').height * 0.4
    },
    btnPlay: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        marginTop: '50%',
    },
    img: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.4,
        borderWidth: 1,
    },
    slider: {
        width: "80%",
    },

    boxLyric: {
        backgroundColor: Colors.BLUE_DARK
    },
    loi: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 21,
        textAlign: 'center',
        color: Colors.LOI
    },
    boxFooter: {
        justifyContent: 'center',
        padding: Dimensions.get('screen').width * 0.05,
    },
    box_1: {
        flexDirection: 'row',
        marginTop: Dimensions.get('screen').height * 0.01,
        justifyContent: 'space-between',

    },
    boxInfor: {
        width: '45%',
        justifyContent: 'space-between',
    },
    txtTitle: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    txtAuthor: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 16,
        color: Colors.TEXT_MINI,
    },
    boxReact: {
        width: "50%",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    boxReact_1: {
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textIcon: {
        fontSize: 10,
        fontWeight: '300',
        lineHeight: 12,
        color: Colors.WHITE,
        marginTop: '3%',
    },
    boxReact_2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Dimensions.get('screen').height * 0.02,
    },
    boxText_1: {
        flexDirection: 'row',
        width: '20%',
    },
    txt: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
        color: Colors.BLUE_50,
    },
    boxRed: {
        flexDirection: 'row',
        backgroundColor: Colors.BAR_RED,
        borderRadius: 4,
    },
    boxRed_1: {
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    txtRed: {
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 16,
        color: Colors.WHITE,
        marginStart: 2,
    },


    boxButton: {
        marginTop: - Dimensions.get('screen').height * 0.005,
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: Dimensions.get('screen').width * 0.3,
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

})