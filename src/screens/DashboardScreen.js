import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { DataCrousel, fonts } from '../config/utils'
import ImagedCarouselCard from "react-native-imaged-carousel-card";


const width = Dimensions.get('window').width;

export class DashboardScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        selectedId:'',
         dataGambar : DataCrousel
        };
      }

    renderItem = ({item}) => {
        const backgroundColor = item.id === this.state.selectedId ? '#BBB' : '#FFF';
        const color = item.id === this.state.selectedId ? 'white' : 'black';
    
        return (
                <TouchableOpacity style={{margin:5}} onPress={()=>this.props.navigation.navigate('Detail',{idFilm: item.id})}>
            <Image source={{uri:item.gambar}} style={{width:100, height:150, borderRadius:10}}/>
            <Text>{item.id}</Text>
          </TouchableOpacity>
        );
      };
  render() {
    return (
      <View>
        <HeaderComponent />
            <ImagedCarouselCard 
            height={230}
            width={300}
            shadowColor='#051934'
            text={"JUDUL FILM"}
            source={{
                uri:'https://dev.pamorstudio.com/assets/img/shop/catleya.jpg',
                
                
            }}
            
            />
            
            <View>
        <View style={{flexDirection:'row',  justifyContent:'space-between', paddingHorizontal:10}}>
            <View>
            <Text style={{fontWeight:'bold', fontSize:20}}>Tranding on Pamor</Text>
            </View>
            <View>
                <Image source={require("../assets/icons/right-arrow.png")} style={{width:20, height:20}}/>
            </View>
        </View>
        <FlatList
          data={this.state.dataGambar}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          extraData={this.state.selectedId}
          horizontal={true}
        />
        </View>
        <View>
        <View style={{flexDirection:'row',  justifyContent:'space-between', paddingHorizontal:10}}>
            <View>
            <Text style={{fontWeight:'bold', fontSize:20}}>New Released</Text>
            </View>
            <View>
                <Image source={require("../assets/icons/right-arrow.png")} style={{width:20, height:20}}/>
            </View>
        </View>
        <FlatList
          data={this.state.dataGambar}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          extraData={this.state.selectedId}
          horizontal={true}
        />
        </View>

      </View>
    )
  }
}

export default DashboardScreen