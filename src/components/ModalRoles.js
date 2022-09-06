import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ModalRoles = (props) => {
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={{textAlign:'left', alignSelf:'flex-start'}}>1. Setiap 1 Point = Rp 1,-</Text>
<Text>2. Penarikan dapat dilakukan setiap hari dengan minimal saldo penarikan adalah Rp 2.500,- (2500 point)</Text>
<Text style={styles.modalText}>3. Penarikan sebelum jam 11:00 WIB akan diproses hari yang sama, dan penarikan setelah jam 11:00 WIB akan diproses H+1</Text>
<Text style={styles.modalText}>4. Biaya penarikan Point Reward adalah Rp 0,- (untuk seluruh Bank yang tergabung dalam sistem SKN BI)</Text>
<Text style={styles.modalText}>5. Penarikan Rp 2.500,- s/d Rp 19.999,- hanya dapat dilakukan melalui aplikasi DANA</Text>
<Text style={styles.modalText}>6. Segala kesalahan penulisan no rekening dan no telp Aplikasi Dana menjadi tanggung jawab dari member</Text>
<Text style={styles.modalText}>7. Apabila terjadi keterlambatan akibat kesalahan atau lainnya akan diinformasikan melalui email kepada member yang bersangkutan</Text>
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

export default ModalRoles

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