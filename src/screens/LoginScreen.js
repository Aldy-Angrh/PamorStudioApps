import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveWidth } from '../config/utils/utils'

const LoginScreen = (props) => {
  return (
   <ImageBackground source={require("../assets/image/bg2.png")} style={{flex:1, justifyContent:'center'}}>
    <View style={{width:"70%", height:"80%", alignSelf:'center',position:'absolute', justifyContent:'flex-start', alignItems:'center'}}>
      <View style={{ height:"45%", justifyContent:'center', alignItems:'center', width:"110%"}}>
        <Image source={require("../assets/image/logos-01.png")} style={{width:150, height:150}}/>
    <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}> THE NEXT LEVEL OF</Text>
    <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}> MOVIE PRODUCTION</Text>
        </View>
    <View style={{marginTop:50}}>
    <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#FFF',
    height: 50,
    borderRadius: 50,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  }}>
          {/* <Image
            source={require('../assets/icons/user.png')}
            style={{
              padding: 10,
              margin: 10,
              height: 25,
              width: 25,
              resizeMode: 'stretch',
              alignItems: 'center',
            }}
          /> */}

          <TextInput
            style={{flex: 1, borderColor: '#FFF', color: '#000'}}
            placeholder="Username/E-mail"
            placeholderTextColor="#FFF"
            textAlign='center'
            underlineColorAndroid="transparent"
            // value={this.state.username}
            // onChangeText={val => this.setState({username: val})}
          />
        </View>
        <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#FFF',
    height: 50,
    borderRadius: 50,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  }}>
          {/* <Image
            source={require('../assets/icons/user.png')}
            style={{
              padding: 10,
              margin: 10,
              height: 25,
              width: 25,
              resizeMode: 'stretch',
              alignItems: 'center',
            }}
          /> */}

          <TextInput
            style={{flex: 1, borderColor: '#FFF', color: '#000',}}
            placeholder="Password"
            placeholderTextColor="#FFF"
            textAlign='center'
            underlineColorAndroid="transparent"
            // value={this.state.username}
            // onChangeText={val => this.setState({username: val})}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#C0B236'}}>Don't have an account ?</Text>
        <TouchableOpacity 
          onPress={()=>props.navigation.navigate("Regist")}
        >
        <Text style={{color:'#FFF'}}>Sing Up</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={{backgroundColor:'#FFF', width:responsiveWidth(420), height:'30%',marginTop:50}}>
          <TouchableOpacity style={{backgroundColor:"#FFF", borderRadius:40, width:"80%", height:50, justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:-20, borderColor:'#130b1e', borderWidth:1}}>
          <Text style={{color:'#130b1e', fontWeight:'bold', fontSize:20}}>Log In Now</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <TouchableOpacity>
              <Image source={require('../assets/icons/fb.png')} style={{width:60, height:60}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/icons/twitter.png')} style={{width:60, height:60}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/icons/ig.png')} style={{width:60, height:60}} />
            </TouchableOpacity>
          </View>
    </View>
    
    </View>
   </ImageBackground>
  )
}

export default LoginScreen