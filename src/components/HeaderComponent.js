import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {Jarak, Tombol} from '../../kecil';
import { IconCari } from '../assets/icons';
import { colors, fonts, responsiveHeight } from '../config/utils';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

//   componentDidMount() {
//     getData('user').then((res) => {
//       if (res) {
//         this.props.dispatch(getListKeranjang(res.uid));
//       } 
//     });
//   }

//   selesaiCari = () => {
//     const { page, navigation, dispatch } = this.props;
//     const { search } = this.state;

//     //jalankan action save keyword
//     dispatch(saveKeywordJersey(search));

//     //jika itu halaman home kita navigate ke listJersey
//     if(page !== "ListJersey") {
//       navigation.navigate("ListJersey");
//     }


//     //kembalikan state search itu ke string kosong
//     this.setState({
//       search: ''
//     })



//   }

  render() {
    const {search} = this.state;
    const {navigation, getListKeranjangResult} = this.props;

    let totalKeranjang;

    if(getListKeranjangResult) {
      totalKeranjang = Object.keys(getListKeranjangResult.pesanans).length;
    }

    return (
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
              placeholder="Pencarian Layanan Tempat..."
              style={styles.input}
              value={search}
              onChangeText={(search) => this.setState({search})}
              onSubmitEditing={() => this.selesaiCari()}
            />
          </View>
        </View>
         <View style={{backgroundColor:"#FFF", width:'90%',height:25, alignSelf:'center', borderRadius:20, marginTop:10, flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <TouchableOpacity>
            <Text>For You</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>Romance</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>Action</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text>Horor</Text>
            </TouchableOpacity>

            </View>
      </View>
    );
  }
}

// const mapStateToProps = (state) => ({
//   getListKeranjangResult: state.KeranjangReducer.getListKeranjangResult,
// })

export default HeaderComponent

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
    borderRadius: 5,
    paddingLeft: 2,
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    fontFamily: fonts.primary.regular,
  },
});
