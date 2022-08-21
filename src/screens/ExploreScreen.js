import { Text, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { responsiveWidth } from '../config/utils/utils'
import {  dataDummy } from '../config/utils/constant';

export class ExploreScreen extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
         dataGambar : dataDummy
        };
      }

  render() {
    return (
      <View style={styles.continer}>
        <View style={styles.contUp} >
            <View style={{marginBottom:10}}>
                <Text style={styles.txt}>Find Movies, Tv Series,</Text>
                <Text style={styles.txt}>and more..</Text>
                    </View>
                <View style={styles.searchSection}>
                    <Image source={require('../assets/icons/IconCari.png')} style={styles.imgSearch} />
                    <TextInput  placeholder="Pencarian..."
              style={styles.input}
              //   value={search}
              //   onChangeText={(search) => this.setState({search})}
              //   onSubmitEditing={() => this.selesaiCari()}
              />
              </View>
            <View style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'center', marginLeft:-50}}>
               <TouchableOpacity style={styles.category}>
                <Text style={styles.txtTittle}>Hot</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.category}>
                <Text style={styles.txtTittle}>Latest</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.category}>
                <Text style={styles.txtTittle}>Rating</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.category}>
                <Text style={styles.txtTittle}>TV Series</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.category}>
                <Text style={styles.txtTittle}>Entertaiment</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.category}>
                <Text style={styles.txtTittle}>Movies</Text>
                </TouchableOpacity> 
            </View>

        </View>
        <ScrollView>
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {this.state.dataGambar? this.state.dataGambar.map((item)=>{
              return(  <View style={{flexDirection:'column', flexWrap:'wrap', margin:5,  width:100}}>
                    <Image source={{uri:item.f_thumbnail}} style={{width:100, height:150, borderRadius:10}} />
                    <Text style={styles.txtTittleFilm}>{item.f_title}</Text>
                </View>)
            }):<Text>Data Kosong</Text>}
        </View>
        </ScrollView>
        
      </View>
    )
  }
}

export default ExploreScreen

const styles = StyleSheet.create({
    continer:{backgroundColor:'#130b1e', flex:1, paddingLeft:10},
    contUp:{ width: responsiveWidth(430), height:"25%",  flexDirection:'column'},
    txt:{color:"#FFF", fontSize:20, fontWeight:'600'},
    txtTittle:{color:'#130b1e', alignSelf:'center'},
    txtTittleFilm:{color:'#FFF', alignSelf:'center', flexShrink:1},
    searchSection:{ 
        flexDirection: 'row',
        backgroundColor:"#FFF",
        borderRadius: 20,
        paddingHorizontal:10,
        marginLeft:-50,
        width:"80%",
        alignSelf:'center',
        alignItems: 'center',},
    imgSearch:{width:20, height:20},
    input:{backgroundColor:'#FFF',width:'80%', height:35},
    category:{
        backgroundColor:'#BBB',
        width:"23%",
        margin:5,
        borderRadius:20
    }

})