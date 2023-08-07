import { Dimensions, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { LOGO_PEPSI } from '../../../../../assets'
import { LogInField } from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/Stack/LoginNavigation'
import { rtdb } from '../../../../core/API/Url/RealTimeDB'
import { User } from '../../../../core/model/User'

const LogIn: React.FC<MainStackScreenProps<'LogIn'>> = ({ navigation, route }) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)

  // const logIn = () => {
  //   navigation.navigate('LogInOTP');
  // }
  const RegisterSplash = () => {
    navigation.navigate('RegisterSplash');
  }


  const [phone, setPhone] = useState('');
  const [listUser, setlistUser] = useState<User[]>([]);

  const [isHas, setIsHas] = useState(false);

  useEffect(() => {

    const getUser = async () => {
      const getUser = rtdb.ref('/User').once('value');
      let list: User[] = [];
      await getUser.then((snapshot: any) => {
        snapshot.forEach((item: any) => {
          if (item != null) {
            list.push(item.val());
            console.log(item.val());
          }
        })
        setlistUser(list);
      });
    }

    getUser();

    return () => { }
  }, [])

  const logIn = () => {
    console.log(listUser)
    if (phone) {
      for (let i = 0; i < listUser.length; i++) {
        if (listUser.at(i)?.phone === phone) {
          console.log("111")
          setIsHas(true);
          console.log("ok")
          navigation.navigate('LogInOTP', {
            phone,
            type: true
          });
          break;
        }
      }

    }
    else {
      Alert.alert('Please enter your phone number');
    }

  }


  const headerCenter = () => {
    return (
      <View >
        <Image source={LOGO_PEPSI} style={styles.image} />
      </View>
    );
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <Header
            centerHeader={headerCenter()}
            containerStyle={styles.header} />
          <Form>
            <LogInField
              inputProps={{
                onChangeText(text) {
                  setPhone(text);
                },
              }} />
          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Đăng nhập'
            onPress={logIn} />
          <View style={styles.viewOr}>
            <View style={styles.line} />
            <Text style={styles.textOr}>hoặc</Text>
            <View style={styles.line} />
          </View>
          <Button
            containerStyle={styles.buttonRegister}
            title='Đăng ký'
            onPress={RegisterSplash}
            titleStyle={styles.title} />
        </View>
      </Background>
    </ScrollView>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
  },
  header: {
    marginVertical: '8%',
  },
  image: {
    resizeMode: 'contain',
    height: 48
  },
  buttonLogIn: {
    width: '90%',
    height: '5.4%',
    marginTop: '10%',
  },
  buttonRegister: {
    width: '90%',
    height: '5.4%',
    backgroundColor: Colors.BACKGROUND_FORM,
  },
  title: {
    color: Colors.WHITE,
  },
  viewOr: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '3%',
  },
  line: {
    width: '45%',
    borderTopWidth: 0.5,
    borderColor: Colors.WHITE
  },
  textOr: {
    width: '10%',
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.WHITE
  },
})