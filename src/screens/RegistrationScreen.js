import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {responsiveWidth} from '../config/utils/utils';

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/image/bg2.png')}
      style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.box} />
      <View style={styles.content}>
        <View style={{ height:"10%", justifyContent:'center', alignItems:'center', width:"110%"}}>
        <Image source={require("../assets/icons/userReg.png")} style={{width:100, height:100}}/>
        </View>
        <View style={{marginTop: 50}}>
            <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>Sign Up</Text>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Masukan Nama Lengkap"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              // value={this.state.username}
              // onChangeText={val => this.setState({username: val})}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Masukan Email"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              // value={this.state.username}
              // onChangeText={val => this.setState({username: val})}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Referal Code"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              // value={this.state.username}
              // onChangeText={val => this.setState({username: val})}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize:10}}>*Jika Menggunakan Kode Referral Anda Akan Mendapatkan 2500 Point</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Password"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              // value={this.state.username}
              // onChangeText={val => this.setState({username: val})}
            />
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Confirm Password"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              // value={this.state.username}
              // onChangeText={val => this.setState({username: val})}
            />
          </View>
        
        </View>
      </View>
      <View style={{ width:responsiveWidth(420), height:'20%',justifyContent:'flex-end', position:'relative',}}>
          <TouchableOpacity style={{backgroundColor:"#FFF", borderRadius:40, width:"80%", height:50, justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:-20, borderColor:'#130b1e', borderWidth:1}}>
          <Text style={{color:'#130b1e', fontWeight:'bold', fontSize:20}}>Register Now</Text>
          </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#BBB',
    width: '80%',
    height: '50%',
    alignSelf: 'center',
    opacity: 0.6,
    borderRadius: 20,
    borderColor: '#FFF',
    borderWidth: 2,
    top:70
  },
  content: {
    width: '70%',
    height: '80%',
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#FFF',
    height: 50,
    borderRadius: 50,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  },
  txtInput:{flex: 1, borderColor: '#FFF', color: '#000'}
});
