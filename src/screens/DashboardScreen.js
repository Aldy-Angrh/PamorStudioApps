import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import HeaderComponent from '../components/HeaderComponent';
import {colors, DataCrousel, dataDummy, fonts, responsiveHeight} from '../config/utils';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';
import {ImageSlider} from 'react-native-image-slider-banner';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { GetListFilm } from '../action/postSlice';

const width = Dimensions.get('window').width;

function mapStateToProps(state) {
  console.log('ISI STATE mapStateToPROPS di Profile :', state);
  return {
    listFilm: state.posts.filmData
  };
}
export class DashboardScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: '',
      search:'',
      romance:false,
      forYou:false,
      action:false,
      horror:false,

      dataGambar: dataDummy,
      Slider:DataCrousel,
    
    };
  }
  componentDidMount(){
    this.props.GetListFilm()
  }

  renderItem = ({item}) => {
    const backgroundColor = item.id === this.state.selectedId ? '#BBB' : '#FFF';
    const color = item.id === this.state.selectedId ? 'white' : 'black';

    return (
      <TouchableOpacity
        style={{margin: 5, flexWrap:'wrap', width:100, flexDirection:'column'}}
        onPress={() =>
          this.props.navigation.navigate('Detail', {idFilm: item.f_id})
        }>
        <Image
          source={{uri: item.f_thumbnail}}
          style={{width: 100, height: 150, borderRadius: 10}}
        />
        <Text style={{color:'#000', flexShrink:1, alignSelf:'center'}}>{item.f_title}</Text>
      </TouchableOpacity>
    );
  };
  toggelKetogoryF = ()=>{
    this.setState({forYou: !this.state.forYou})
    this.setState({search: "Romance"})
  }
  toggelKetogoryR = ()=>{
    this.setState({romance: !this.state.romance})
    this.setState({search: "Romance"})
  }
  toggelKetogoryA = ()=>{
    this.setState({action: !this.state.action})
    this.setState({search: "Romance"})
  }
  toggelKetogoryH = ()=>{
    this.setState({horror: !this.state.horror})
    this.setState({search: "Romance"})
  }
  render() {
    const {search} = this.state;
    const {listFilm} = this.props
    return (
      <View
       
        style={{flex: 1}}>
         <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          {/* Input Pencarian  */}
          <View style={{borderRightColor:'#000', borderRightWidth:1, marginRight:5}}>
            <Image source={require('../assets/image/logos-01.png')} style={{height:50, width:50, paddingHorizontal:10}}/>
          </View>
          <View style={styles.searchSection}>
            {/* <IconCari /> */}
            <Image source={require('../assets/icons/IconCari.png')} style={{height:20, width:20}}/>
            <TextInput
              placeholder="Pencarian..."
              style={styles.input}
              value={search}
              onChangeText={(search) => this.setState({search})}
            />
          </View>
        </View>
         <View style={{ width:'90%',height:25, alignSelf:'center', borderRadius:20, marginTop:10, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <TouchableOpacity style={{borderBottomColor:"#FFF", borderBottomWidth:this.state.forYou ? 3 : 0, borderRadius:0, padding:2}} onPress={()=>this.toggelKetogoryF()}>
            <Text style={styles.txtCategory}>For You</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomColor:"#FFF", borderBottomWidth:this.state.romance ? 3 : 0, borderRadius:0, padding:2}} onPress={()=>this.toggelKetogoryR()}>
            <Text style={styles.txtCategory}>Romance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomColor:"#FFF", borderBottomWidth:this.state.action ? 3 : 0, borderRadius:0, padding:2}} onPress={()=>this.toggelKetogoryA()}>
            <Text style={styles.txtCategory}>Action</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderBottomColor:"#FFF", borderBottomWidth:this.state.horror ? 3 : 0, borderRadius:0, padding:2}} onPress={()=>this.toggelKetogoryH()}>
            <Text style={styles.txtCategory}>Horor</Text>
            </TouchableOpacity>

            </View>
      </View>
        <ScrollView>
        <ImageSlider
          data={this.state.Slider}
          autoPlay={true}
          timer={5000}
          blurRadius={10}
          showHeader
          caroselImageStyle={{height: 200}}></ImageSlider>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Tranding on Pamor
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/right-arrow.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          </View>
          <FlatList
            data={listFilm}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            extraData={this.state.selectedId}
            horizontal={true}
          />
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                New Released
              </Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/right-arrow.png')}
                style={{width: 20, height: 20}}
              />
            </View>
          </View>
          <FlatList
            data={listFilm}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            extraData={this.state.selectedId}
            horizontal={true}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      GetListFilm
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)( DashboardScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#130b1e",
    height: responsiveHeight(130),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingLeft: 10,
    height:30,
    marginTop:10,
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    height:40,
    fontFamily: fonts.primary.regular,
  },
  txtCategory:{color:"#FFF", fontSize:15}
});