import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, { useEffect } from 'react';
import {responsiveWidth} from '../config/utils/utils';
import ModalRoles from '../components/ModalRoles';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {Formik} from 'formik'
import * as Yup from 'yup'
import { MembershipDummy } from '../config/utils';
import DocumentPicker from 'react-native-document-picker';
import ModalPenghitungan from '../components/ModalPenghitungan';
import ModalNoRekening from '../components/ModalNoRekening';
import {  useDispatch,connect,useSelector } from 'react-redux'
import { PostRegist } from '../action/postSlice';


const RegistrationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPerhitungan, setModalPerhitungan] = useState(false);
  const [modalRek, setModalRek] = useState(false);
  const [mamber] = useState(MembershipDummy)
  const [Mambership, setMembership] = useState("")
  const [SecurePass, setSecurePass] = useState(true)
  const [SecureConfPass, setSecureConfPass] = useState(true)
  const [NameFile, setNameFile] = useState('')
  const [SingelFile, setSingleFile] = useState(null)

  const dispatch = useDispatch();

  const data = useSelector((state)=> state.posts.registData)
  const error =  useSelector((state)=> state.posts.registError)
  useEffect(()=>{
    resultLogin()
   },[])
  const resultLogin = () => {
  if (data !== null) {
   if (data.message == "Registration Successfully") {
      Alert.alert("Success",data.message,[
        { text: "OK", onPress: () => props.navigation.navigate('ProfileUser') }
      ])
      
    }else if (error !== null) {
      Alert.alert("Registration Failed", error.message)
    }else{
  
    }
  }else{

  }
};

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
     
      });
      console.log('res : ' + JSON.stringify(res));
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
        alert('Canceled');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
      email: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
      password_confirmation: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required!'),
      referral: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
  });

 const toggleModal = (modal)=>{
    setModalVisible(!modal)
  }
  const toggleModalPerhitungan = (modal)=>{
    setModalPerhitungan(!modal)
  }
  const toggleModalRek = (modal)=>{
    setModalRek(!modal)
  }
  const toggelSecurePass = (val)=>{
   setSecurePass(!val)
  }
  const toggelSecureConfPass = (val)=>{
    setSecureConfPass(!val)
  }
    
  const handleRegist =(values)=>{
   if (SingelFile == null) {
     alert("Upload Bukti Pembayaran terlebih dahulu")
   }else if (Mambership == "") {
    alert("Silahkan Pilih Paket Mambership")
   }else{

     const data ={
       "name":values.name,
       "email": values.email,
       "password": values.password,
       "password_confirmation": values.password_confirmation,
       "refferal": values.referral,
       "mambership": Mambership,
       "file": SingelFile
      }
      
      dispatch(PostRegist(data))
    }

  }
  return (
    <ImageBackground
      source={require('../assets/image/bg2.png')}
      style={{flex: 1, justifyContent: 'center'}}>
         <Formik initialValues={{name:'',email:'', password:'', referral:'',password_confirmation:'', membership:''}}
        validationSchema={SignupSchema}
        // onSubmit={(values, errors)=> handleLogin(values, errors)}
        // onSubmit={()=> console.log(values)}
        onSubmit={values => handleRegist(values)}


      >
        {({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
      <View style={styles.content}>
      
        <View style={{marginTop: 0}}>
            <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>Sign Up</Text>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Masukan Nama Lengkap"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </View>
          {errors.name && touched.name ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.name}</Text>
           ) : null}
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Masukan Email"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            />
          </View>
          {errors.email && touched.email ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.email}</Text>
           ) : null}
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Referal Code"
              placeholderTextColor="#BBB"
              textAlign="center"
              underlineColorAndroid="transparent"
              onChangeText={handleChange('referral')}
            onBlur={handleBlur('referral')}
            value={values.referral}
            />
          </View>
          {errors.referral && touched.referral ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.referral}</Text>
           ) : null}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFF', fontSize:10}}>*Jika Menggunakan Kode Referral Anda Akan Mendapatkan 2500 Point</Text>
          </View>
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Password"
              placeholderTextColor="#BBB"
              textAlign="center"
              secureTextEntry={SecurePass}
              underlineColorAndroid="transparent"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <TouchableOpacity onPress={()=>toggelSecurePass(SecurePass)}>
              <Image source={require('../assets/icons/eye.png')} style={{width:30,height:30}}/>
            </TouchableOpacity>
          </View>
          {errors.password && touched.password ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.password}</Text>
           ) : null}
          <View style={styles.formInput}>
            <TextInput
              style={styles.txtInput}
              placeholder="Confirm Password"
              placeholderTextColor="#BBB"
              textAlign="center"
              secureTextEntry={SecureConfPass}
              underlineColorAndroid="transparent"
              onChangeText={handleChange('password_confirmation')}
            onBlur={handleBlur('password_confirmation')}
            value={values.password_confirmation}
            />
                <TouchableOpacity onPress={()=>toggelSecureConfPass(SecureConfPass)}>
              <Image source={require('../assets/icons/eye.png')} style={{width:30,height:30}}/>
            </TouchableOpacity>
          </View>
          {errors.password_confirmation && touched.password_confirmation ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.password_confirmation}</Text>
           ) : null}
          <View style={styles.formInput}>
           <Picker
           style={styles.txtInput}
           selectedValue={Mambership}
           onValueChange={(itemValue)=> setMembership(itemValue)}
           >
            {mamber.map(val =>{
              return <Picker.Item label={val.m_title} value={val.m_id}/>
            })}

           </Picker>
          </View>
          <TouchableOpacity style={styles.formRule} onPress={()=> toggleModalRek(modalRek) }>
            <Text style={styles.txtRule}>Pilih No Rekening:</Text>
          </TouchableOpacity>
            <ModalNoRekening visible={modalRek} toggleClosed={toggleModalRek}/>
            <View style={styles.BoxUpload}>
              {SingelFile != null ? SingelFile.map((val)=>{
                setNameFile(val.name)
                return(
                <Text style={{ color:'#BBB', width:"42%"}} numberOfLines={1}>{val.name} </Text>
                )
              }) :
               <Text>Upload Bukti Bayar</Text>
            }
            <TouchableOpacity
          style={styles.ButtonUpload}
          activeOpacity={0.5}
          onPress={selectFile}>
          <Text style={styles.buttonTextStyle}>Select File</Text>
        </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.formRule} onPress={()=> toggleModal(modalVisible) }>
            <Text style={styles.txtRule}>Aturan Penarikan Point:</Text>
          </TouchableOpacity>
            <ModalRoles visible={modalVisible} toggleClosed={toggleModal}/>
            <TouchableOpacity style={styles.formRule} onPress={()=> toggleModalPerhitungan(modalPerhitungan) }>
            <Text style={styles.txtRule}>Aturan Penghitungan Point:</Text>
          </TouchableOpacity>
            <ModalPenghitungan visible={modalPerhitungan} toggleClosed={toggleModalPerhitungan}/>
        </View>
      <View style={{ width:responsiveWidth(420), height:'20%',justifyContent:'flex-end', marginTop:-50 }}>
          <TouchableOpacity style={{backgroundColor:"#FFF", borderRadius:40, width:"80%", height:50, justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:-20, borderColor:'#130b1e', borderWidth:1}}
          onPress={handleSubmit}>
          <Text style={{color:'#130b1e', fontWeight:'bold', fontSize:20}}>Register Now</Text>
          </TouchableOpacity>
    </View>
      </View>
          )}
      </Formik>
    </ImageBackground>
  );
};

function mapStateToProps(state) {
  console.log('ISI STATE mapStateToPROPS :', state);
  // return {
  //   loginResult: state.AuthReducer.loginResult,
  //   contentDesa: state.CommonReducer.DesaResult,
  // };
}
export default connect(mapStateToProps)(RegistrationScreen);

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#BBB',
    width: '80%',
    height: '50%',
    alignSelf: 'center',
    opacity: 0.6,
    borderRadius: 20,
    borderColor: '#FFF',
    borderWidth: 2,
    top:70
  },
  content: {
    width: '70%',
    height: '80%',
    alignSelf: 'center',
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  formInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderStyle:'dashed',
    borderColor: '#BBB',
    height: 50,
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  },
  formRule:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle:'dashed',
    borderColor: '#BBB',
    height: 20,
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  },
  txtInput:{flex: 1, borderColor: '#FFF', color: '#000'},
  txtRule:{flex:1, color:'#007AFF'},
  BoxUpload:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 50,
    borderRadius: 10,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  },
  ButtonUpload:{
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 50,
    width:100,
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'flex-end',
    borderTopStartRadius: 30,
    marginLeft: 35,
    marginTop: 15,
  }
});
