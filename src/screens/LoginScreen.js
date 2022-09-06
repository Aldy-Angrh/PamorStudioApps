import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveWidth } from '../config/utils/utils'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { connect, useDispatch, useSelector } from 'react-redux'
import { AuthLogin } from '../action/postSlice'

const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.posts.data)
  const error =  useSelector((state)=> state.posts.isError)
  const [passwd, setPasswd] = useState(true)

useEffect(()=>{
 resultLogin()
},[data, error])

const resultLogin = () => {
  if (data !== null) {
    if (data.message == "Invalid Email or Password") {
      Alert.alert("Login Failed", data.message)
    } else if (data.message == "Login Successfully") {
      Alert.alert("Success",data.message,[
        { text: "OK", onPress: () => props.navigation.navigate('ProfileUser') }
      ])
      
    }else if (error !== null) {
      Alert.alert("Login Failed", error.message)
    }else{
  
    }
  }else{

  }
};

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required!'),
  });
  const handleLogin = (values,err)=>{
    console.log("MASUK VALUE DI HANDLE ", values);
    console.log("ISI ERROR ", err);
    if (err.username || err.password === 'Required!') {
      console.log("Login please complete it first");
    }else{
      dispatch(AuthLogin(values))
    }
  }
  const toggelSecurePass = (val)=>{
    setPasswd(!val)
   }
  return (
   <ImageBackground source={require("../assets/image/bg2.png")} style={{flex:1, justifyContent:'center'}}>
      <Formik initialValues={{username:'', password:''}}
        validationSchema={SignupSchema}
        onSubmit={(values, errors)=> handleLogin(values, errors)}
        // onSubmit={(values, errors)=> console.log(values, errors)}


      >
        {({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
    <View style={{width:"70%", height:"80%", alignSelf:'center',position:'absolute', justifyContent:'flex-start', alignItems:'center'}}>
      <View style={{ height:"45%", justifyContent:'center', alignItems:'center', width:"110%"}}>
        <Image source={require("../assets/image/logos-01.png")} style={{width:150, height:150}}/>
    <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}> THE NEXT LEVEL OF</Text>
    <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}> MOVIE PRODUCTION</Text>
        </View>
    <View style={{marginTop:50}}>
    <View style={{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#FFF',
    height: 50,
    borderRadius: 50,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  }}>
        
          <TextInput
            style={{flex: 1, borderColor: '#FFF', color: '#FFF'}}
            placeholder="Username/E-mail"
            placeholderTextColor="#FFF"
            textAlign='center'
            underlineColorAndroid="transparent"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
         
          />
        </View>
             {errors.username && touched.username ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.username}</Text>
           ) : null}
        <View style={{
          flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderColor: '#FFF',
    height: 50,
    borderRadius: 50,
    margin: 5,
    marginLeft: 10,
    width: '100%',
  }}>
       

          <TextInput
            style={{flex: 1, borderColor: '#FFF', color: '#FFF',}}
            placeholder="Password"
            placeholderTextColor="#FFF"
            textAlign='center'
            secureTextEntry={passwd}
            underlineColorAndroid="transparent"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            
          />
            <TouchableOpacity onPress={()=>toggelSecurePass(passwd)}>
              <Image source={require('../assets/icons/eye.png')} style={{width:30,height:30}}/>
            </TouchableOpacity>
        </View>
          {errors.password && touched.password ? (
             <Text style={{ alignSelf:'center', color:'red'}}>{errors.password}</Text>
           ) : null}
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Text style={{color:'#C0B236'}}>Don't have an account ?</Text>
        <TouchableOpacity 
          onPress={()=>props.navigation.navigate("Regist")}
          >
        <Text style={{color:'#FFF'}}>Sing Up</Text>
        </TouchableOpacity>
        </View>
    </View>
    <View style={{backgroundColor:'#FFF', width:responsiveWidth(420), height:'30%',marginTop:50}}>
          <TouchableOpacity style={{backgroundColor:"#FFF", borderRadius:40, width:"80%", height:50, justifyContent:'center', alignItems:'center', alignSelf:'center', marginTop:-20, borderColor:'#130b1e', borderWidth:1}}
          onPress={()=>handleSubmit(values, errors)}
          // onPress={()=>}
          >
          <Text style={{color:'#130b1e', fontWeight:'bold', fontSize:20}}>Log In Now</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("ProfileUser")}>
              <Image source={require('../assets/icons/fb.png')} style={{width:60, height:60}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/icons/twitter.png')} style={{width:60, height:60}} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('../assets/icons/ig.png')} style={{width:60, height:60}} />
            </TouchableOpacity>
          </View>
    </View>
    
    </View>
          )}
          </Formik>
   </ImageBackground>
  )
}
function mapStateToProps(state) {
  console.log('ISI STATE mapStateToPROPS :', state);
  // return {
  //   loginResult: state.AuthReducer.loginResult,
  //   contentDesa: state.CommonReducer.DesaResult,
  // };
}

export default connect(mapStateToProps,)(LoginScreen)