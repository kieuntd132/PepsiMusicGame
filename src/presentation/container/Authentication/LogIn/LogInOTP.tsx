import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import Form from '../../../component/form/Form'
import { OTPFail, OTPField } from '../../../component/input/TextField'
import Button from '../../../component/button/Button'
import { LOGO_PEPSI } from '../../../../../assets'
import { MainStackScreenProps } from '../../../navigation/StackNavigation'
import { AuthorizedNavigator } from '../../../navigation/AuthorizedNavigator'

const LogInOTP : React.FC<MainStackScreenProps<'LogInOTP'>>= ({navigation,route}) => {
    // const Home = () => {
    //   navigation.navigate("AuthorizedNavigator");
    // }

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
            {/* <OTPFail/> */}
            <OTPField/>
          </Form>
          <Button 
            containerStyle = {styles.buttonLogIn}
            title='Xác nhận'
            // onPress={Home}/>
            />
        </View>
      </Background>
    </ScrollView>
  )
}

export default LogInOTP

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
})