import { StyleSheet, Image, Text, View, TextInputProps, TextStyle, TextProps, StyleProp} from 'react-native'
import React from 'react'
import { LogInField, RegisterField } from '../input/TextField'
import { Colors } from '../../resource/value/Colors';
import { LOGO_PEPSI, TEXT_PEPSI_MUSIC } from '../../../../assets';

export interface FormProps extends TextProps {
    textStyle_1? : StyleProp<TextStyle>,
    textStyle_2? : StyleProp<TextStyle>,
    children? : React.ReactNode,
}

const Form: React.FC<FormProps> = (props) => {
  const {  textStyle_1, textStyle_2, children} = props;
  return (
    <View style = {styles.container}>
      <View style = {styles.header} >
      <Text style = {styles.text_1} >Hey, mừng bạn đến với</Text>
      <Image style = {styles.image} source={TEXT_PEPSI_MUSIC}/>
      </View>
      {children}
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '53%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.BACKGROUND_FORM,
  },
  header: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_1 : {
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 19.5,
    color: Colors.WHITE,
  },
  text_2 : {
    fontStyle: 'italic',
    fontSize: 45,
    fontWeight: '900',
    color: Colors.WHITE,
  },
  image : {
    resizeMode: 'contain',
    width: 235
  },
})