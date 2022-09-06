import { View, Text, StyleSheet, Modal, Pressable, Image } from 'react-native'
import React from 'react'

const ModalNoRekening = (props) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{textAlign:'left', alignSelf:'flex-start'}}> 1. No Rek Bank Permata : 984-464-9999
A.n PT Mega Fiesta Pratama
Kode Bank : 013</Text>
<Text>2. No Rek BCA : 0478878888
An. Mega Fiesta Pratama</Text>
<Text style={styles.modalText}>3. Qris</Text>
<Image  source={require('../assets/image/qris.jpg')} style={{width:250, height:250, marginBottom:10}}/>


            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => props.toggleClosed(props.visible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  )
}

export default ModalNoRekening

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "left",
      alignSelf:'flex-start'
      
    }
  });