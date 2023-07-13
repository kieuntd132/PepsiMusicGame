import { Image, ImageBackground, ImageSourcePropType, StyleProp, StyleSheet, Text, TextProps, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors'
import TextTitle from '../text/TextTitle';

export interface ButtonProps extends TextProps {
  containerStyle: StyleProp<ViewStyle>,
  titleStyle?: StyleProp<TextStyle>,
  icon?: ImageSourcePropType,
  title?: string,
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { containerStyle, titleStyle, icon, title, onPress } = props;

  const eventLeft = () => {
    if (icon) {
      return (
          <Image source={icon} style={styles.icon} />
      );
    }
    return null;
  };

  return (
    <TouchableOpacity style={[styles.button, containerStyle]} onPress={onPress}>
      {eventLeft()}
      <TextTitle titleStyle = {titleStyle} title= {title}/>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
    height: '50%',
  },
})