import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import WebView from 'react-native-webview';
import {responsiveWidth} from '../config/utils';
import {DataCrousel} from '../config/utils';

export class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: '',
      dataGambar: DataCrousel,
    };
  }
  renderItem = ({item}) => {
    const backgroundColor = item.id === this.state.selectedId ? '#BBB' : '#FFF';
    const color = item.id === this.state.selectedId ? 'white' : 'black';

    return (
      <TouchableOpacity
        style={{
          margin: 5,
          shadowColor: '#FFF',
          shadowOffset: {
            width: 0,
            height: 11,
          },
          shadowOpacity: 0.6,
          shadowRadius: 15.19,

          elevation: 23,
          justifyContent: 'center',
          alignItems: 'center',
          opacity:0.3
        }}
        onPress={() =>
          this.props.navigation.navigate('Detail', {idFilm: item.id})
        }>
        <Image
          source={{uri: item.gambar}}
          style={{width: responsiveWidth(400), height: 200, borderRadius: 10}}
        />
        <Text>{item.id}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <ScrollView style={{backgroundColor: '#130b1e', flex: 1}}>
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
              uri: 'https://dev.pamorstudio.com/files/uploads/film/3961a1bdcc65977ecf896956717a8f1f.mp4',
            }}
            style={{backgroundColor: '#130b1e'}}
          />
        </View>
        <View
          style={{top: 0, zIndex: 99, marginTop: -20, flexDirection: 'row'}}>
          <View>
            <Image
              source={{
                uri: 'https://dev.pamorstudio.com/assets/img/shop/jump.jpg',
              }}
              style={{width: 100, height: 120, borderRadius: 10}}
            />
          </View>
          <View
            style={{
              top: 0,
              zIndex: 99,
              backgroundColor: '#130b1e',
              opacity: 0.7,
              flexDirection: 'row',
              width: responsiveWidth(300),
            }}>
            <View style={{flex: 1, margin: 5}}>
              <Text style={{color: 'white', marginVertical: 10}}>
                91% Match
              </Text>
              <Text  style={{color: '#FFF'}}>2 Season</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'white', marginVertical: 10}}>TV-MA</Text>
              <Text  style={{color: '#FFF'}}>2018</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: responsiveWidth(300),
            height: 20,
            marginTop: -20,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignSelf: 'flex-end',
          }}>
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Image source={require('../assets/icons/add.png')} style={{width:20, height:20}}/>
            <Text style={{color: '#BBB',marginTop:5}}>My List</Text>
          </View>
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Image source={require('../assets/icons/like.png')} style={{width:20, height:20}}/>
            <Text style={{color: '#BBB', marginTop:6}}>Like</Text>
          </View>
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Image source={require('../assets/icons/down.png')} style={{width:30, height:30}}/>
            <Text style={{color: '#BBB'}}>Download</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            width: responsiveWidth(400),
            marginVertical: 25,
            height: 30,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}> PLAY </Text>
        </TouchableOpacity>
        <Text style={{color: '#FFF'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 30,
            marginBottom: 10,
            borderBottomColor: '#FFF',
            borderBottomWidth: 1,
            height: 30,
          }}>
          <TouchableOpacity>
            <Text style={{color: '#FFF'}}>Episodes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: '#FFF'}}>Trailer And More</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'column'}}>
          <FlatList
            data={this.state.dataGambar}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            extraData={this.state.selectedId}
          />
        </View>
      </ScrollView>
    );
  }
}

export default DetailScreen;
