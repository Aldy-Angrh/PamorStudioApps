import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import { GetProfile } from '../action/postSlice';
import { bindActionCreators } from 'redux';


function mapStateToProps(state) {
  console.log('ISI STATE mapStateToPROPS di Profile :', state);
  return {
    dataLogin: state.posts.data,
    dataProfile: state.posts.profileData
  };
}
const width = Dimensions.get('window').width;
// const dispatch = useDispatch()
export class ProfileScreen extends Component {

  componentDidMount(){
    this.initialMount()
  }

  initialMount(){
    console.log("ISI datalogin ", this.props.dataLogin);
    const {dataLogin} = this.props
    if (dataLogin) {
        this.props.GetProfile(dataLogin.access_token)
    }
  }
  render() {
    const {dataProfile}= this.props
    return (
      <View style={{flex: 1}}>
        {dataProfile?  (
          <>
        <View style={styles.containerUp}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Dashboard")}>
          <Image source={require('../assets/icons/left.png')} style={{width:20, height:20, alignSelf:'flex-start',marginBottom:-25, marginLeft:10}} />
          </TouchableOpacity>
          <Image
            source={require('../assets/icons/notif.png')}
            style={styles.iconNotif}
          />
          <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', color:'#FFF'}}>{dataProfile.user.name}</Text>
        </View>
        <View style={{}}>
          <Image
            source={require('../assets/icons/hacker.png')}
            style={{position: 'absolute', marginTop: -30, backgroundColor:'#FFF',borderRadius:50, borderColor:'#000', borderWidth:1}}
          />
          <View  style={{
              alignSelf: 'flex-end',
              width:"80%",
              height:50,
              flexDirection:'row',
              justifyContent:'space-evenly'
            }}>
              <View style={{flexDirection:'column', justifyContent:'space-evenly'}}>
                <Text style={styles.txt}>{dataProfile.total_token}</Text>
                <Text style={styles.txt}>$MORE</Text>

              </View>
              <View style={{flexDirection:'column', justifyContent:'space-evenly'}}>
                <Text style={styles.txt}>{dataProfile.user.membership_package}</Text>
                <Text style={styles.txt}>Mambership</Text>

              </View>
              <View style={{flexDirection:'column', justifyContent:'space-evenly'}}>
                <Text style={styles.txt}>{dataProfile.total_poin_referral}</Text>
                <Text style={styles.txt}>Pain</Text>

              </View>
             
         
              </View>

          <TouchableOpacity
            style={{
              width: '90%',
              height: 70,
              backgroundColor: '#130b1e',
              marginTop: 30,
              alignSelf: 'center',
              borderRadius: 10,
              paddingLeft: 20,
              justifyContent: 'center',
            }}
            onPress={()=>this.props.navigation.navigate("Login")}
            >
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 20}}>
                {' '}
                Upgrade Mambership
              </Text>
              <Image source={require('../assets/icons/arrow-white.png')} />
            </View>
            <Text style={{color: '#FFF', fontSize: 12}}>
              Watch the content in advance before anyone else
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopColor: '#BBB',
            borderTopWidth: 1,
            borderBottomColor: '#BBB',
            borderBottomWidth: 1,
            marginTop:15,
            width: '90%',
            alignSelf: 'center',
            height: 40,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}
            onPress={()=>this.props.navigation.navigate("DetailProfile")}
            >
            <Text style={{color: '#130b1e', fontWeight: 'bold', fontSize: 15}}>
              Profile
            </Text>
            <Image
              source={require('../assets/icons/right-arrow.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopColor: '#BBB',
            borderTopWidth: 1,
            marginVertical: 0,
            borderBottomColor: '#BBB',
            borderBottomWidth: 1,
            width: '90%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#130b1e', fontWeight: 'bold', fontSize: 15}}>
              History
            </Text>
            <Image
              source={require('../assets/icons/right-arrow.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: 'https://dev.pamorstudio.com/assets/img/shop/waras.jpg',
            }}
            style={{width: 150, height: 100, borderRadius: 10}}
          />
          <Text style={{color: '#130b1e'}}>Judul Film</Text>
        </View>
        
      
      
        <View
          style={{
            borderTopColor: '#BBB',
            borderTopWidth: 1,
            borderBottomColor: '#BBB',
            borderBottomWidth: 1,
            width: '90%',
            alignSelf: 'center',
            height: 40,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Text style={{color: '#130b1e', fontWeight: 'bold', fontSize: 15}}>
              Settings
            </Text>
            <Image
              source={require('../assets/icons/right-arrow.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>
        </>):<View><Text>DATA KOSOGN</Text></View>}
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      GetProfile,
    },
    dispatch,
  );
}
export default connect(mapStateToProps,mapDispatchToProps)( ProfileScreen);
const styles = StyleSheet.create({
  containerUp: {
    backgroundColor: '#293462',
    height: 72,
    width: width,
    justifyContent: 'center',
    flexDirection:'column',
    paddingRight: 20,
  },
  iconNotif: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
  },
  txt:{
    color:'#BBB',
    textAlign:'center'
  }
});
