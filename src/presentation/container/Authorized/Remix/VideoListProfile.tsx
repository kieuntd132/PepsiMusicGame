import { StyleSheet, Text, View, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import { BACK, ICON_DOWNLOAD, ICON_HEART, ICON_PLAY, ICON_REPORT, ICON_SHARE} from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../../../component/header/Header'




const VideoListProfile = () => {


  interface Item {
    id: number,
    title: string,
    titleMini: string,
    image: any,
    imagelich: any,
    createAt: string,
    imageEye: any,
    view: number,
    imageHeart: any,
    like: number,
  }
  
  const DATA: Item[] = [
    { id: 1, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', image: require("../../../../../assets/Frame-1_1x.png"), imagelich: require("../../../../../assets/Icon_calendar.png") , createAt: '19.02.2021',imageEye: require("../../../../../assets/Icon_eye.png") ,view: 9203,imageHeart: require("../../../../../assets/Icon_Tym.png"), like: 10203  },
    { id: 2, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', image: require("../../../../../assets/Frame-2_1x.png"), imagelich: require("../../../../../assets/Icon_calendar.png") , createAt: '19.02.2021',imageEye: require("../../../../../assets/Icon_eye.png") ,view: 9203,imageHeart: require("../../../../../assets/Icon_Tym.png"), like: 10203  },
    { id: 3, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', image: require("../../../../../assets/Frame-3_1x.png"), imagelich: require("../../../../../assets/Icon_calendar.png") , createAt: '19.02.2021',imageEye: require("../../../../../assets/Icon_eye.png") ,view: 9203,imageHeart: require("../../../../../assets/Icon_Tym.png"), like: 10203  },
    { id: 4, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', image: require("../../../../../assets/Frame-4_1x.png"), imagelich: require("../../../../../assets/Icon_calendar.png") , createAt: '19.02.2021',imageEye: require("../../../../../assets/Icon_eye.png") ,view: 9203,imageHeart: require("../../../../../assets/Icon_Tym.png"), like: 10203  },
    { id: 5, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', image: require("../../../../../assets/Frame-5_1x.png"), imagelich: require("../../../../../assets/Icon_calendar.png") , createAt: '19.02.2021',imageEye: require("../../../../../assets/Icon_eye.png") ,view: 9203,imageHeart: require("../../../../../assets/Icon_Tym.png"), like: 10203  },
    { id: 6, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', image: require("../../../../../assets/Frame-6_1x.png"), imagelich: require("../../../../../assets/Icon_calendar.png") , createAt: '19.02.2021',imageEye: require("../../../../../assets/Icon_eye.png") ,view: 9203,imageHeart: require("../../../../../assets/Icon_Tym.png"), like: 10203  },
  
  
  ];


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
                <Image source={ICON_PLAY} />
                </TouchableOpacity>
                <Image style={styles.img} source={item.image} />
              
            </View>
            
            :
            <View style = {styles.boxLyric}>
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
                <Image source={ICON_HEART} />
                    <Text style={styles.textIcon}>Thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxReact_1}>
                <Image source={ICON_SHARE} />
                    <Text style={styles.textIcon}>Chia sẻ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxReact_1}>
                <Image source={ICON_DOWNLOAD} />
                    <Text style={styles.textIcon}>Tải về</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxReact_1}>
                <Image source={ICON_REPORT} />
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
                <Image source={item.imagelich}  />
                    <Text style={styles.txtRed}>{item.createAt}</Text>
                </View>
                <View style={styles.boxRed_1} >
                <Image source={item.imageEye}/>
                    <Text style={styles.txtRed}>{item.view}</Text>
                </View>
                <View style={styles.boxRed_1} >
                <Image source={item.imageHeart} />
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
      // navigation.navigate('Record');
    }
    const Notification = () => {
      // navigation.navigate('Record');
    }
    // const centerHeader = () => {
    //   return (
    //     <Text style={styles.textHeader}>Video list</Text>
    //   )
    // };

    return (
      <Background>
       
        
       <Header
                iconLeft={BACK}
                leftHeader={goBack}
                centerHeader={"AiVan.01"}
                // iconRight={ICON_NOTIFICATION}
                // rightHeader={Notification}
            />
        <View style={styles.container}>
        <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
        </View>
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
      marginTop: '40%',
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
      backgroundColor: Colors.DARK_BLUE
  },
  loi: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      fontWeight: '500',
      lineHeight: 21,
      textAlign: 'center',
      color: Colors.WHITE_BORDER2
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
      backgroundColor: Colors.RED_BACK,
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
  })