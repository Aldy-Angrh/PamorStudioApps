import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';


const width = Dimensions.get('window').width;
export class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.containerUp}>
          <Image
            source={require('../assets/icons/notif.png')}
            style={styles.iconNotif}
          />
        </View>
        <View style={{}}>
          <Image
            source={require('../assets/icons/user.png')}
            style={{position: 'absolute', marginTop: -50}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: '700',
              fontSize: 20,
              color: '#130b1e',
            }}>
            Login
          </Text>

          <TouchableOpacity
            style={{
              width: '80%',
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
                Join Mambership
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
            marginVertical: 15,
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
              Download
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
              Watchlist & Reservation
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
              Help & Reports
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
      </View>
    );
  }
}

export default ProfileScreen;
const styles = StyleSheet.create({
  containerUp: {
    backgroundColor: '#293462',
    height: '20%',
    width: width,
    justifyContent: 'center',
    paddingRight: 20,
  },
  iconNotif: {
    alignSelf: 'flex-end',
    width: 30,
    height: 30,
  },
});
