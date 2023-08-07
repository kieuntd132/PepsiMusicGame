import { Dimensions, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { LOGO_PEPSI } from '../../../../../assets'
import { RegisterField } from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/Stack/LoginNavigation'
import { rtdb } from '../../../../core/API/Url/RealTimeDB'
import { User } from '../../../../core/model/User'


const Register: React.FC<MainStackScreenProps<'Register'>> = ({ navigation, route }) => {

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [listUser, setlistUser] = useState<User[]>([]);
  const Register = () => {
    navigation.navigate('Register');
  }

  const [isHas, setIsHas] = useState(false);

  useEffect(() => {

    const getUser = async () => {
      const getUser = rtdb.ref('/User').once('value');
      let list: User[] = [];
      await getUser.then((snapshot: any) => {
        snapshot.forEach((item: any) => {
          list.push(item.val());
        })
        setlistUser(list);
      });
    }

    getUser();

    return () => { }
  }, [])



  const complete = () => {
    console.log(phone + name);
    setIsHas(false);
    if (!phone) {
      Alert.alert('Please enter your phone');
    }
    else if (!name) {
      Alert.alert('Please enter your name');
    }
    else {
      console.log("okkk")
      console.log(listUser)

      for (let i = 0; i < listUser.length; i++) {
        if (listUser.at(i)?.phone === phone) {
          console.log("111")
          setIsHas(true);
          Alert.alert('This number is already in use');
          setPhone('')
          return;
        }
        else if (listUser.at(i)?.name === name) {
          console.log("2222")
          setIsHas(true);
          Alert.alert('This name is already in use');
          setName('')
          return;
        }
      }
      if (!isHas) {
        navigation.navigate('RegisterOTP', {
          phone,
          name,
          type: false
        });
      }
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
            <RegisterField inputProps_1={{
              onChangeText(text) {
                setPhone(text)
              },
              value: phone
            }}
              inputProps_2={{
                onChangeText(text) {
                  setName(text)
                },
                value: name
              }} />


          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Lấy mã OTP'
            onPress={complete} />
          <View style={styles.viewOr}>
            <View style={styles.line} />
            <Text style={styles.textOr}>hoặc</Text>
            <View style={styles.line} />
          </View>
          <Button
            containerStyle={styles.buttonRegister}
            title='Đăng nhập'
            onPress={Register}
            titleStyle={styles.title} />
        </View>
      </Background>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
  },
  header: {
    marginVertical: '8.3%',
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