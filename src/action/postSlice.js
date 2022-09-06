import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../config/utils/constant"


export const AuthLogin = createAsyncThunk("postLogin", async(data)=>{
    const formData = new FormData();
    formData.append('email', data.username)
    formData.append('password', data.password)

        const respon =  await fetch(`${API_URL}login`,{
            method:'post',
            body: formData
        })

        return respon.json().then((res)=>(res.data))
})

export const GetProfile = createAsyncThunk("getProfile", async(token)=>{
    const respon = await fetch(`${API_URL}profile`,{
        method:'get',
        headers:{
            Authorization:`Bearer ${token}`,
            Accept:"application/json"
        }
    })
    return respon.json().then((res)=>(res.data))

})
export const GetListFilm =  createAsyncThunk('getFilm', async()=>{
    const respon = await fetch(`${API_URL}film`,{
        method:'get',
    })
    return respon.json().then((res)=>(res.data))

})
export const GetDetailFilm =  createAsyncThunk('getDetail', async(id)=>{
    console.log("MASUK DI GET PROFILE ", id);
    const respon = await fetch(`${API_URL}film/${id}`,{
        method:'get',
    })
    return respon.json().then((res)=>(res.data))

})

export const GetPlayFilm = createAsyncThunk('getPlay', async(data)=>{
    const respon = await  fetch(`${API_URL}film/${data.id}/play`,{
        method:'get',
        headers:{
            Authorization:`Bearer ${data.token}`,
            Accept: "application/json"
        }
    })
    
    console.log("ISI DATA DI PLAY ",respon);
    return respon.json().then((res)=>(res.data))
})
export const PostRegist = createAsyncThunk('postRegist', async(val)=>{
    console.log("ISI VALUE ", val);
    const formData = new FormData();
    formData.append('name', val.name)
    formData.append('email', val.email)
    formData.append('password', val.password)
    formData.append('password_confirmation', val.password_confirmation)
    formData.append('referral',val.refferal),
    formData.append('membership', 6)
    formData.append('bukti_pembayaran',{
        uri:val.file[0].uri,
        type:val.file[0].type,
        name:val.file[0].name,
    })
    const respon =  await fetch(`${API_URL}register`,{
        method:'post',
        body:formData,
        headers:{
            'Content-Type' :'multipart/form-data; ',
        }
    })
        console.log("REGIST", respon);
    return respon.json().then((res)=>(res.data))

})

const AuthLoginReducer =  createSlice({
    name:'authLogin',
    initialState:{
        isLoading: false,
        isError: null,
        data:null,

        profileData:null,
        profilLoading: false,
        profilError: null,

        
        filmData:null,
        filmLoading: false,
        filmError: null,

        registData:null,
        registLoading: false,
        registError: null,

        detailFilmData:null,
        detailFilmLoading: false,
        detailFilmError: null,

        playFilmData:null,
        playFilmLoading: false,
        playFilmError: null,
        
    },
    extraReducers:{
        [AuthLogin.pending]: (state)=>{
            state.isLoading = true;
        },
        [AuthLogin.fulfilled]:(state, action)=>{
            state.isLoading = false;
            state.data= action.payload
        },
        [AuthLogin.rejected]:(state, action)=>{
            state.isLoading = false;
            state.isError = action.error
        },
        [GetProfile.pending]:(state) =>{
            state.profilLoading = true;
        },
        [GetProfile.fulfilled]:(state, action)=>{
            state.profilLoading =  false;
            state.profileData = action.payload
        },
        [GetProfile.rejected]:(state, action)=>{
            state.profilLoading = false;
            state.profilError = action.error
        },
        
        [GetListFilm.pending]:(state) =>{
            state.filmLoading = true;
        },
        [GetListFilm.fulfilled]:(state, action)=>{
            state.filmLoading =  false;
            state.filmData = action.payload
        },
        [GetListFilm.rejected]:(state, action)=>{
            state.filmLoading = false;
            state.filmError = action.error
        },
        [PostRegist.pending]:(state) =>{
            state.registLoading = true;
        },
        [PostRegist.fulfilled]:(state, action)=>{
            state.registLoading =  false;
            state.registData = action.payload
        },
        [PostRegist.rejected]:(state, action)=>{
            state.registLoading = false;
            state.registError = action.error
        },

        [GetDetailFilm.pending]:(state) =>{
            state.detailFilmLoading = true;
        },
        [GetDetailFilm.fulfilled]:(state, action)=>{
            state.detailFilmLoading =  false;
            state.detailFilmData = action.payload
        },
        [GetDetailFilm.rejected]:(state, action)=>{
            state.detailFilmLoading = false;
            state.detailFilmError = action.error
        },

        [GetPlayFilm.pending]:(state) =>{
            state.playFilmLoading = true;
        },
        [GetPlayFilm.fulfilled]:(state, action)=>{
            state.playFilmLoading =  false;
            state.playFilmData = action.payload
        },
        [GetPlayFilm.rejected]:(state, action)=>{
            state.playFilmLoading = false;
            state.playFilmError = action.error
        }

    }
})
export default AuthLoginReducer.reducer