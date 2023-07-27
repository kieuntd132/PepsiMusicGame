import { StyleSheet, Text, View, Modal, Alert, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../resource/value/Colors';
import { ICON_EXIT } from '../../../../assets';

export interface DialogNotificationProps {
  title?: string,
  btnLeft?: string,
  btnRight?: string,
  isVisibile?: boolean,
  onPressL?: () => void;
  onPressR?: () => void;
  isExit?: boolean;
  onPressE?: () => void;
}

const DialogNotification: React.FC<DialogNotificationProps> = (props) => {
  const { title, btnLeft, btnRight, isVisibile, onPressL, onPressR, isExit, onPressE } = props;
  // const [visible, setVisible] = React.useState(isVisibile)

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisibile}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {
            isExit ?
              <View style={styles.boxBtnExit}>
                <TouchableOpacity style={styles.btnExit} onPress = {onPressE}>
                  <Image source={ICON_EXIT} style={styles.iconExit} />
                </TouchableOpacity>
              </View>
              :
              <View></View>
          }
          <Text style={styles.modalText}>{title}</Text>
          <View style={styles.boxButton}>
            <TouchableOpacity
              style={[styles.buttonLeft]}
              onPress={onPressL}>
              <Text style={styles.textLeft}>{btnLeft}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonRight]}
              onPress={onPressR}>
              <Text style={styles.textRight}>{btnRight}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default DialogNotification

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: Dimensions.get('screen').width * 0.8,
    backgroundColor: Colors.BLUE_PEPSI,
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
  },
  boxButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('screen').height * 0.02,
  },
  buttonLeft: {
    width: Dimensions.get('screen').width * 0.3,
    backgroundColor: Colors.BLUE_PEPSI,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.WHITE,
  },
  buttonRight: {
    width: Dimensions.get('screen').width * 0.3,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 10,
  },
  textLeft: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textRight: {
    color: Colors.BLUE_PEPSI,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  boxBtnExit: {
    width : "110%",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btnExit: {
    width : 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.BACKGROUND_MIC

  },
  iconExit: {
    resizeMode: 'contain'
  },
})