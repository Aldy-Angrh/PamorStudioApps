import {
  ActivityIndicator,
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
import { GetDetailFilm, GetListFilm } from '../action/postSlice';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  console.log('ISI STATE mapStateToPROPS di Profile :', state);
  return {
    dataFilm: state.posts.detailFilmData,
    listFilm: state.posts.filmData
  };
}
export class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: '',
    };
  }

  componentDidMount(){
    this.props.GetDetailFilm(this.props.route.params.idFilm)
    this.props.GetListFilm()
  }

  renderItem = ({item}) => {
    const backgroundColor = item.id === this.state.selectedId ? '#BBB' : '#FFF';
    const color = item.id === this.state.selectedId ? 'white' : 'black';
console.log("ISI",item);
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
          source={{uri: item.f_thumbnail}}
          style={{width: responsiveWidth(400), height: 200, borderRadius: 10}}
        />
        <Text style={{color:'#BBB'}}>{item.f_title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    console.log(this.props.listFilm);
    const {dataFilm, listFilm}= this.props
    return (
      <ScrollView style={{backgroundColor: '#130b1e', flex: 1}}>
        {dataFilm ?(<>
        <View
          style={{
            backgroundColor: '#130b1e',
            width: responsiveWidth(400),
            height: 200,
            alignSelf:"center",
          }}>
          <TouchableOpacity style={{zIndex:99, position:'absolute', alignSelf:'center',top:54}}>
          <Image style={{ zIndex:99, position:'absolute', marginLeft:-30}} source={require('../assets/icons/play.png')}/>
          </TouchableOpacity>
          <Image source={{uri: dataFilm.f_thumbnail}} style={{width:responsiveWidth(400), height:200}}/>
        </View>
        <View
          style={{top: 0, zIndex: 99, marginTop: -20, flexDirection: 'row'}}>
          <View>
            <Image
              source={{
                uri: dataFilm.f_thumbnail,
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
                {dataFilm.f_title}
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
          }}
          onPress={()=> this.props.navigation.navigate("Play",{idFilm: this.props.route.params.idFilm})}

>
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
            data={listFilm}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            extraData={this.state.selectedId}
          />
        </View>
        </>):<ActivityIndicator size='large' color="#FFF" /> }
      </ScrollView>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      GetDetailFilm,
      GetListFilm
    },
    dispatch,
  );
}
export default connect(mapStateToProps, mapDispatchToProps) (DetailScreen);
