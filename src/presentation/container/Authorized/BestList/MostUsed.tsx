import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Background from '../../../component/background/Background'
import { BACK, ICON_MIC, MIC } from '../../../../../assets'
import { Colors } from '../../../resource/value/Colors'
import { BeatListStackScreenProps } from '../../../navigation/stack/BeatNavigation'
import Header from '../../../component/header/Header';
import { Music } from '../../../../core/model/Music'
import { rtdb } from '../../../../core/API/Url/RealTimeDB'


const MostUsed: React.FC<BeatListStackScreenProps<'MostUsed'>> = ({ navigation, route }) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)


  const RecordOne = () => {
    navigation.navigate('RecordOne');
  }
  const goBack = () => {
    navigation.navigate('BeatList');
  }

  interface Item {
    id: number,
    name: string,
    des: string,
    image: any,
  }

  let listMusic: Music[] = [];

  const [list_Music, setlist_Music] = useState<Music[]>([])

  useEffect(() => {

    const getMusic = async () => {
      const get = rtdb.ref('/Music')
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
          setlist_Music(listMusic);
          console.log(list_Music);
        });
    }

    getMusic();

    return () => { }
  }, [])





  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.item}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.card1}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.titleMini}>{item.des}</Text>
          <View style={styles.card2}>
            <Image source={ICON_MIC} />
            <Text style={styles.titleWatch}> 9.023 lượt cover</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={RecordOne}>
        <Image source={MIC} style={styles.imageMic} />
      </TouchableOpacity>
    </View>
  );
  <Background>
    <View style={styles.container}>
      <Header
        iconLeft={BACK}
        leftHeader={goBack}
        centerHeader={"Sử dụng nhiều nhất"}
      />
      <FlatList
        data={list_Music}
        renderItem={renderItem}
        keyExtractor={(item) => item.idMusic.toString()}

      />
    </View>
  </Background>

    );
};
export default MostUsed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: Colors.BLUE_BACKGROUND,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: Dimensions.get('window').width * 0.04,
  },
  card2: {
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
