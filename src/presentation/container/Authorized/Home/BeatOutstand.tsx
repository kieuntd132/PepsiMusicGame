import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, BACKGROUND_TOOLBAR } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { BeatListStackScreenProps } from '../../../navigation/Stack/BeatListNavigation';


interface Item {
  id: number;
  title: string;
  titleWatch: string;
  titleMini: string;
  image: any;
  imageMiniMicro: any;
  imageMic: any;
}

const DATA: Item[] = [
  { id: 1, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 2, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi2.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 3, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi3.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 4, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 5, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi2.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 6, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi3.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 7, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 8, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi2.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 9, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi3.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },
  { id: 10, title: 'Tiền nhiều để làm gì', titleMini: 'GDucky ft.Lưu Hiền Trinh', titleWatch: ' 9.023 lượt cover', image: require("../../../../../assets/Icon_pepsi.png"), imageMic: require("../../../../../assets/Icon_Mic.png"), imageMiniMicro: require("../../../../../assets/Icon_litleMicro.png") },

];


const BeatOutstand: React.FC<BeatListStackScreenProps<'BeatOutstand'>> = ({ navigation, route }) => {
  const goBack = () => {
    navigation.navigate('BeatList');
  }
  const goRecordOne = () => {
    navigation.navigate('RecordOne');
  }
  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <View style={styles.gr1}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.gr2}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.titleMini}>{item.titleMini}</Text>
          <View style={styles.gr3}>
            <Image source={item.imageMiniMicro} />
            <Text style={styles.titleWatch}>{item.titleWatch}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={goRecordOne}>
        <Image source={item.imageMic} style={styles.imageMic} />
      </TouchableOpacity>
    </View>
  );
  
  return (
    <Background>
      <View style={styles.container}>
        <ImageBackground source={BACKGROUND_TOOLBAR} style={styles.headline}>
          <TouchableOpacity onPress={goBack}>
            <Image source={BACK} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.rule}>Beat nổi bật</Text>
        </ImageBackground>
        <FlatList
          data={DATA}
          renderItem={renderItem}
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
  headline: {
    height: Dimensions.get('window').height * 0.13,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconBack: {
    marginTop: Dimensions.get('window').height * 0.04,
    marginLeft: Dimensions.get('window').width * 0.03,
  },
  rule: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 27,
    color: Colors.WHITE,
    marginTop: Dimensions.get('window').height * 0.04,
    marginLeft: Dimensions.get('window').width * 0.30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    width: Dimensions.get('window').width * 0.92,
    backgroundColor: Colors.BLUE_BG,
  },
  gr1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gr2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: Dimensions.get('window').width * 0.04,
  },
  gr3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BLUE_TITLE,
    borderRadius: 4,
    backgroundColor: Colors.BLUE_TITLE,
    padding: Dimensions.get('window').width * 0.01,
  },
  image: {
    marginLeft: -Dimensions.get('window').width * 0.12,
  },
  title: {
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
  imageMic: {
    marginRight: -Dimensions.get('window').width * 0.08,

  },
});

export default BeatOutstand;