import { Image, ImageBackground, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Wave } from 'react-native-animated-spinkit'
// import Spinner from 'react-native-spinkit'

export class IntialScreen extends Component {
    componentDidMount(){
        this.onRefresh()
    }
    onRefresh = ()=>{
        setTimeout(()=>{
          this.props.navigation.navigate("Dashboard")
        }, 5000)
      }
  render() {
    return (
        <ImageBackground source={require('../assets/image/bg.jpg')} style={{  flex: 1,
            height: '100%',
            width: '100%', justifyContent:'center', alignItems:'center'}} >
                <View style={{  flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:300}}>
                <Image source={require('../assets/image/logos-01.png')} style={{width:130, height:130,}} />
                <Wave size={48} color="#FFF" />
                </View>
        </ImageBackground>
    )
  }
}

export default IntialScreen