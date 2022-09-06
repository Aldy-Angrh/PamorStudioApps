import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import { GetProfile } from '../action/postSlice';


function mapStateToProps(state) {
  console.log('ISI STATE mapStateToPROPS :', state);
  return {
    dataLogin: state.posts.data,
    dataProfile: state.posts.profileData
  };
}
export class DetailProfileScreen extends Component {

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
    const {dataProfile} = this.props
    return (
      <ImageBackground style={styles.containerUp}>
        {/* <Image
          source={require('../assets/image/logos-01.png')}
          style={styles.iconNotif}
        /> */}
        {/* <Text style={{
                color: '#BBB',
                fontSize: 25,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>  Detail Profile</Text> */}
              {dataProfile ? <>
        <View style={styles.container}>
          <View style={{alignItems: 'center', marginTop: 10, flexDirection:'row', justifyContent:'center'}}>
            <Image source={require('../assets/icons/hacker.png')} style={{width:50, height:50}} />
            <View style={{flexDirection:'column'}}>

            <Text
              style={{
                  color: '#000',
                  fontSize: 25,
                  fontWeight: 'bold',
                }}>
              {dataProfile.user.name}
            </Text>
            <Text style={{color: '#bbb'}}>{dataProfile.user.email}</Text>
                  </View>
          </View>
          <View style={{padding:30}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center'}}>
              <Text style={styles.txtLabelMember}>Membership</Text>
              <View
                style={{
                  backgroundColor: '#C1AC51',
                  width: 100,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: '#FFF'}}>
                {dataProfile.user.membership_package}
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center'}}>
              <Text style={styles.txtLabel}>Token $MORE</Text>
              <Text style={styles.txtLabel}>{dataProfile.total_token}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center', borderTopColor:'#BBB', borderTopWidth:0.6}}>
              <Text style={styles.txtLabel}>Total Poin</Text>
              <Text style={styles.txtLabel}>{dataProfile.total_poin_referral}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center', borderTopColor:'#BBB', borderTopWidth:0.6}}>
              <Text style={styles.txtLabel}>Kode Referal</Text>
              <Text
                style={{
                  color: '#BBB',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {dataProfile.user.code_referral}
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center', borderTopColor:'#BBB', borderTopWidth:0.6}}>
              <Text style={styles.txtLabel}>Link Referal</Text>
              <Text
                style={{
                  color: '#BBB',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                8851
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center', borderTopColor:'#BBB', borderTopWidth:0.6}}>
              <Text style={styles.txtLabel}>Membership</Text>
              <View
                style={{
                  backgroundColor: '#E0D8B0',
                  width: 40,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: '#000'}}>
                  {dataProfile.total_member_referral}
                </Text>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center', borderTopColor:'#BBB', borderTopWidth:0.6}}>
              <Text style={styles.txtLabel}>Withdraw (Dalam Proses)</Text>
              <View
                style={{
                  backgroundColor: '#FFE572',
                  width: 40,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text style={{fontWeight: 'bold', color: '#000'}}>
                  0.00
                </Text>
              </View>
            </View> 
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', height:54, alignItems:'center', borderTopColor:'#BBB', borderTopWidth:0.6}}>
              <Text style={styles.txtLabel}>Mambership</Text>
              <Text style={{color:'#000', fontSize:20}}>0.00</Text>
            </View>
          </View>
        </View>
          <View style={{ height:140, justifyContent:'flex-end', width:"100%"}}>

          <TouchableOpacity style={{alignSelf:'flex-end', justifyContent:'center', width:140, height:80, backgroundColor:'#130b1e', borderTopLeftRadius:20}}>
                <Text style={{color:'#FFF', alignSelf:'center'}}>upgrade</Text>
          </TouchableOpacity>
          </View>
          </>
            :<ActivityIndicator /> }
      </ImageBackground>
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
export default connect(mapStateToProps, mapDispatchToProps)( DetailProfileScreen);

const styles = StyleSheet.create({
  containerUp: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  iconNotif: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    width: 80,
    height: 80,
  },
  container: {
    width: '90%',
    height: '80%',
    top: 20,
    backgroundColor: '#FFF',
    zIndex: 99,
    alignSelf: 'center',
    borderRadius:20
  },
  txtLabel: {
    color: '#000',
    fontSize: 20,
  },
  txtLabelMember: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 27,
  },
});
