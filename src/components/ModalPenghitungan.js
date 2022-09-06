import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import React from 'react'

const ModalPenghitungan = (props) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>1. Point Reward dari bonus undangan akan dikreditkan kepada member maximal H+2 sejak paket keanggotaan sudah diaktifkan</Text>
<Text style={styles.modalText}>2. Perhitungan Point Reward akan mengacu pada aturan yang telah ditetapkan oleh admin Pamor Studio</Text>
<Text style={styles.modalText}>3. Apabila terjadi selisih perhitungan Point Reward bisa ditanyakan kepada admin Pamor Studio melalui email di admin@pamorstudio.com atau di halaman kontak yang ada di website www.pamorstudio.com</Text>
<Text style={styles.modalText}>4. Komplain akibat selisih perhitungan Point Reward dapat diajukan max H+3 setelah point reward dikreditkan kepada member. Lewat dari itu dianggap sudah tidak ada masalah. </Text>
<Text style={styles.modalText}>5. Apabila terjadi kesalahan sistem dan force major lainnya, perhitungan point akan mengikuti catatan offline dari Pamor Studio</Text>


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

export default ModalPenghitungan

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