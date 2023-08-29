import { StyleSheet, Image, View, Text, Dimensions, FlatList } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import { AVATAR, BACK, ICON_LOGOUT, QUE } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation'

interface Item {
  id: number;
  title: string;
  titleWatch: string;
  titleTym: string;
  titleMini: string;
  image: any;
  imagePlay: any;
  imageWatch: any;
  imageTym: any;
  imageShare: any,
  imageDown: any,
}

const DATA: Item[] = [
  { id: 1, title: 'Tiền nhiều để làm gì', titleMini: 'Mới', titleWatch: '11.8K', titleTym: '10.203', image: require("../../../../../assets/Img_item1.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageTym: require("../../../../../assets/Icon_Tym.png"), imageDown: require("../../../../../assets/Icon_down.png"), imageShare: require("../../../../../assets/Icon_share.png"), imagePlay: require("../../../../../assets/Icon_Play.png") },
  { id: 2, title: 'Tiền nhiều để làm gì', titleMini: 'Mới', titleWatch: '11.8K', titleTym: '10.203', image: require("../../../../../assets/Img_item2.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageTym: require("../../../../../assets/Icon_Tym.png"), imageDown: require("../../../../../assets/Icon_down.png"), imageShare: require("../../../../../assets/Icon_share.png"), imagePlay: require("../../../../../assets/Icon_Play.png") },
  { id: 3, title: 'Tiền nhiều để làm gì', titleMini: 'Mới', titleWatch: '11.8K', titleTym: '10.203', image: require("../../../../../assets/Img_item1.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageTym: require("../../../../../assets/Icon_Tym.png"), imageDown: require("../../../../../assets/Icon_down.png"), imageShare: require("../../../../../assets/Icon_share.png"), imagePlay: require("../../../../../assets/Icon_Play.png") },
  { id: 4, title: 'Tiền nhiều để làm gì', titleMini: 'Mới', titleWatch: '11.8K', titleTym: '10.203', image: require("../../../../../assets/Img_item2.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageTym: require("../../../../../assets/Icon_Tym.png"), imageDown: require("../../../../../assets/Icon_down.png"), imageShare: require("../../../../../assets/Icon_share.png"), imagePlay: require("../../../../../assets/Icon_Play.png") },
  { id: 5, title: 'Tiền nhiều để làm gì', titleMini: 'Mới', titleWatch: '11.8K', titleTym: '10.203', image: require("../../../../../assets/Img_item1.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageTym: require("../../../../../assets/Icon_Tym.png"), imageDown: require("../../../../../assets/Icon_down.png"), imageShare: require("../../../../../assets/Icon_share.png"), imagePlay: require("../../../../../assets/Icon_Play.png") },
  { id: 6, title: 'Tiền nhiều để làm gì', titleMini: 'Mới', titleWatch: '11.8K', titleTym: '10.203', image: require("../../../../../assets/Img_item2.png"), imageWatch: require("../../../../../assets/Icon_eye.png"), imageTym: require("../../../../../assets/Icon_Tym.png"), imageDown: require("../../../../../assets/Icon_down.png"), imageShare: require("../../../../../assets/Icon_share.png"), imagePlay: require("../../../../../assets/Icon_Play.png") },

];

const renderItem = ({ item }: { item: Item }) => (
  <View style={styles.grItem}>
    <Image source={item.image} style={styles.img} />
    <View style={styles.grMoi}>
      <Text style={styles.textNew}>{item.titleMini}</Text>
    </View>
    <Image source={item.imagePlay} style={styles.imgPlay} />
    <Text style={styles.textTitle}>{item.title}</Text>
    <View style={styles.grBottom}>
      <View style={styles.grleft}>
        <View style={styles.grEye}>
          <Image source={item.imageWatch} style={styles.imgeye} />
          <Text style={styles.textWatch}>{item.titleWatch}</Text>
        </View>
        <View style={styles.grTym}>
          <Image source={item.imageTym} style={styles.imgeye} />
          <Text style={styles.textWatch}>{item.titleTym}</Text>
        </View>
      </View>
      <View style={styles.grRight}>
        <Image source={item.imageShare} style={styles.imgshare} />
        <Image source={item.imageDown}/>
      </View>
    </View>
  </View>
);

const ProfileRecord: React.FC<BeatListStackScreenProps<'ProfileRecord'>> = ({ navigation, route }) => {
  return (
    <Background>
      {/* <Header
        iconLeft={BACK}
        // leftHeader={goBack}
        centerHeader={"Thông tin cá nhân"}
        iconRight={ICON_LOGOUT}
      // rightHeader={goNotification}
      /> */}
      <View style={styles.grava}>
        <Image source={AVATAR} />
        <View style={styles.grcenter}>
          <Text style={styles.textAV}>AiVan.01</Text>
          <View style={styles.grtext}>
            <View style={styles.grtxt1}>
              <Text style={styles.txt1}>Tổng số video</Text>
              <Text style={styles.txt2}>2.110</Text>
            </View>
            <Image style={styles.vac} source={QUE} />
            <View style={styles.grtxt1}>
              <Text style={styles.txt1}>Tổng tương tác</Text>
              <Text style={styles.txt2}>1.02 Tr</Text>
            </View>
          </View>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </Background>
  )
}

export default ProfileRecord

const styles = StyleSheet.create({
  grava: {
    backgroundColor: Colors.BLUE_LINEAR,
    backdropFilter: 'blur(2px)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.1,
    paddingVertical: Dimensions.get('window').height * 0.03,
  },
  grcenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAV: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 24,
    color: Colors.WHITE,
  },
  grtext: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Dimensions.get("window").height * 0.01,
  },
  grtxt1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    fontFamily: 'Montserrat',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15,
    color: Colors.WHITE,
  },
  txt2: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 21,
    color: Colors.WHITE,
  },
  vac: {
    marginHorizontal: Dimensions.get('window').width * 0.03,
  },
  grItem: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: Dimensions.get('window').width * 0.005,
    paddingVertical: Dimensions.get('window').height * 0.005,
    marginLeft: Dimensions.get('window').width * 0.055,
    marginTop: Dimensions.get('window').height * 0.015,
    marginBottom: Dimensions.get('window').height * 0.015,
    width: Dimensions.get('window').width * 0.42,
    height: Dimensions.get('window').height * 0.245,
    borderColor: Colors.DARK_BLUE_2,
    backgroundColor: Colors.DARK_BLUE_2,
    borderWidth: 3.5,
    borderRadius: 8,
  },
  img: {
    position: 'relative'
  },
  grMoi: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.01,
    left: Dimensions.get('window').width * 0.015,
    paddingHorizontal: Dimensions.get('window').width * 0.02,
    paddingVertical: Dimensions.get('window').height * 0.001,
    backgroundColor: Colors.RED,
    borderColor: Colors.RED,
    borderWidth: 1,
    borderRadius: 2,
  },
  textNew: {
    fontFamily: 'Inter',
    fontSize: 8,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 12,
    color: Colors.WHITE,
  },
  imgPlay: {
    position: 'absolute',
    top: Dimensions.get('window').height * 0.07,
    left: Dimensions.get('window').width * 0.17,
  },
  textTitle: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
    color: Colors.WHITE,
    marginTop: Dimensions.get('window').height * 0.01,
  },
  grBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.395,
    marginTop: Dimensions.get('window').height * 0.01,
  },
  grleft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  grEye: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.008,
    paddingVertical: Dimensions.get('window').height * 0.0028,
    backgroundColor:Colors.RED,
    borderTopLeftRadius:4,
    borderBottomLeftRadius:4

  },
  grTym: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width * 0.008,
    paddingVertical: Dimensions.get('window').height * 0.003,
    backgroundColor:Colors.BLUE_TITLE,
    borderTopRightRadius:4,
    borderBottomRightRadius:4
  },
  imgeye: {
    marginRight: Dimensions.get('window').width * 0.01,
  },
  textWatch: {
    fontFamily: 'Montserrat',
    fontSize: 8,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 9.6,
    color: Colors.WHITE,
  },
  grRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgshare: {
    marginRight: Dimensions.get('window').width * 0.015,
  },
})