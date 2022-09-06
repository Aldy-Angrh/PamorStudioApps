import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class NoAccess extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          selectedId: '',
        };
      }
  render() {
    console.log(this.props);
    return (
      <View style={{flex:1, opacity:0.7, backgroundColor:'#FFF', justifyContent:'center', alignItems:"center"}}>
        <Text style={{color:'#000', fontWeight:"bold", fontSize:40, textAlign:'center', marginTop:-50}}>no access, Please login first</Text>

        <TouchableOpacity style={{backgroundColor:"#130b1e", borderRadius:40, width:"80%", height:50, justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:20 ,borderColor:'#130b1e', borderWidth:1}}
         onPress={()=>this.props.isiProps.navigation.navigate("Login")}
         >
          <Text style={{color:'#FFF', fontWeight:'bold', fontSize:20}}>Log In Now</Text>
          </TouchableOpacity>
          <Text style={{color:'#000', fontWeight:'bold', fontSize:15, marginVertical:10}}>OR</Text>

          <TouchableOpacity style={{backgroundColor:"#130b1e", borderRadius:40, width:"80%", height:50, justifyContent:'center', alignItems:'center', alignSelf:'center',  borderColor:'#130b1e', borderWidth:1}}
         onPress={()=>this.props.isiProps.navigation.navigate("Regist")}
          >
          <Text style={{color:'#FFF', fontWeight:'bold', fontSize:20}}>Registration </Text>
          </TouchableOpacity>
      </View>
    )
  }
}

export default NoAccess