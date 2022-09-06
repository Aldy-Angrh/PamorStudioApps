import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import DocumentPicker from 'react-native-document-picker';
import { useState } from 'react';


const UploadFile = () => {
    const [singleFile, setSingleFile] = useState(null);
 
    const uploadImage = async () => {
      // Check if any file is selected or not
      if (singleFile != null) {
        // If file selected then create FormData
        const fileToUpload = singleFile;
        const data = new FormData();
        data.append('name', 'Image Upload');
        data.append('file_attachment', fileToUpload);
        // Please change file upload URL
        let res = await fetch(
          'http://localhost/upload.php',
          {
            method: 'post',
            body: data,
            headers: {
              'Content-Type': 'multipart/form-data; ',
            },
          }
        );
        let responseJson = await res.json();
        if (responseJson.status == 1) {
          alert('Upload Successful');
        }
      } else {
        // If no file selected the show alert
        alert('Please Select File first');
      }
    };
   
    const selectFile = async () => {
      // Opening Document Picker to select one file
      try {
        const res = await DocumentPicker.pick({
          // Provide which type of file you want user to pick
          type: [DocumentPicker.types.allFiles],
          // There can me more options as well
          // DocumentPicker.types.allFiles
          // DocumentPicker.types.images
          // DocumentPicker.types.plainText
          // DocumentPicker.types.audio
          // DocumentPicker.types.pdf
        });
        // Printing the log realted to the file
        console.log('res : ' + JSON.stringify(res));
        // Setting the state to show single file attributes
        setSingleFile(res);
      } catch (err) {
        setSingleFile(null);
        // Handling any exception (If any)
        if (DocumentPicker.isCancel(err)) {
          // If user canceled the document selection
          alert('Canceled');
        } else {
          // For Unknown Error
          alert('Unknown Error: ' + JSON.stringify(err));
          throw err;
        }
      }
    };
    console.log("ISI DARI SINGLE FILE ", singleFile);
    return (
      <View style={styles.mainBody}>
   
      
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={selectFile}>
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>
     
      </View>
    );
  };
   
  const styles = StyleSheet.create({
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
    },
    buttonStyle: {
      backgroundColor: '#307ecc',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#307ecc',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 15,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    textStyle: {
      backgroundColor: '#fff',
      fontSize: 15,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
      textAlign: 'center',
    },
  });
  
export default UploadFile