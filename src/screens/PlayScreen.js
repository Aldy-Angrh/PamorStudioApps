import { ImageBackground, Text, View } from 'react-native'
import React, { Component } from 'react'
import WebView from 'react-native-webview';
import { responsiveWidth } from '../config/utils';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import NoAccess from '../components/NoAccess';
import { GetPlayFilm } from '../action/postSlice';


function mapStateToProps(state) {
    console.log('ISI STATE mapStateToPROPS di PLAY :', state);
    return {
      token: state.posts.data,
      listFilm: state.posts.filmData,
      playFilm: state.posts.playFilmData
    };
  }
export class PlayScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          selectedId: '',
        };
      }
      componentDidMount(){      
        this.initialMount()
      }
       initialMount = ()=>{
         if (this.props.token) {
            const data ={
                "id": this.props.route.params.idFilm,
                'token': this.props.token.access_token
            }
            this.props.GetPlayFilm(data)
         }
       }
  render() {
    console.log("ISI PROSP", this.props);
    const {token, playFilm}= this.props
    return (
        <ImageBackground source={require('../assets/image/bg.jpg')} style={{flex:1}}>
            {token && playFilm ? <>
        <View
        style={{
            backgroundColor: '#130b1e',
          width: responsiveWidth(400),
          height: 200,
          alignSelf:"center"
        }}>
        <WebView
          allowsFullscreenVideo={true}
          source={{
              uri: playFilm.video,
            }}
          style={{backgroundColor: '#130b1e'}}
        />
      </View>
      <View
          style={{top: 10, zIndex: 99, marginTop: -20, flexDirection: 'row', alignSelf:'center'}}>
          <View>
           
          </View>
          <View
            style={{
              top: 0,
              zIndex: 99,
              backgroundColor: '#130b1e',
              opacity: 0.7,
              flexDirection: 'row',
              width: responsiveWidth(400),
              justifyContent:'center'
            }}>
            <View style={{flex: 1, margin: 5}}>
              <Text style={{color: 'white', marginVertical: 10}}>
                judul
              </Text>
              <Text  style={{color: '#FFF'}}>2 Season</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'white', marginVertical: 10}}>TV-MA</Text>
              <Text  style={{color: '#FFF'}}>2018</Text>
            </View>
          </View>
        </View>
          <View style={{top:30}}>
            <Text style={{color:'#FFF'}}>Description : </Text>
            <Text style={{color: '#FFF'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
          </View>
          </>
          : <NoAccess isiProps ={this.props} /> }
            </ImageBackground>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
      GetPlayFilm
      },
      dispatch,
    );
  }

export default connect(mapStateToProps, mapDispatchToProps) (PlayScreen);