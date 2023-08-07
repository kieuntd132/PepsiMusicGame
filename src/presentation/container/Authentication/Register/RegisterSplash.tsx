import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import {LOGO_PEPSI } from '../../../../../assets'
import { LogInField } from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/Stack/LoginNavigation'



const RegisterSplash: React.FC<MainStackScreenProps<'RegisterSplash'>>= ({navigation,route}) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)

  const Register = () => {
    navigation.navigate('Register');
  }
  const RegisterOTP = () => {
    navigation.navigate('RegisterOTP');
  }
  const headerCenter = () => {
    return (
      <View >
        <Image source={LOGO_PEPSI} style = {styles.image}/>
      </View>
    );
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <Header
            centerHeader={headerCenter()} 
            containerStyle = {styles.header}/>
          <Form>
            <LogInField />
          </Form>
          <Button 
            containerStyle = {styles.buttonLogIn}
            title='Lấy mã OTP'
            onPress={RegisterOTP}/>
          <View style = {styles.viewOr}>
            <View style = {styles.line}/>
            <Text style = {styles.textOr}>hoặc</Text>
            <View style = {styles.line}/>
          </View>
          <Button 
            containerStyle = {styles.buttonRegister}
            title='Đăng ký'
            onPress={Register}
            titleStyle = {styles.title}/>
        </View>
      </Background>
    </ScrollView>
  )
}

export default RegisterSplash

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
    justifyContent:'space-between',
    alignItems: 'center',
    marginVertical: '3%',
  },
  line : {
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