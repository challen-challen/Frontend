import {SET_USER_TEMP, LOGOUT} from "./acitonTypes";
import axios from "axios";

export const setUserTemp = () => async dispatch => {
    try{
       await axios.get(`${process.env.API_SERVER}/api/setUser`, {withCredentials: true})
            .then(response => {
                localStorage.setItem('user', response.data.user._id)
                dispatch({type: SET_USER_TEMP,payload: response.data.user})
            })
    } catch (e) {
      dispatch({type: SET_USER_TEMP,payload:e, error: true})
    }
}

export const logout = ()=> async dispatch =>{
    try{
        await axios.get(`${process.env.API_SERVER}/api/logout`,{withCredentials:true}).then(response=>
        {
        sessionStorage.clear();
        dispatch({type: LOGOUT, payload: response.data})
        }).catch(error=>error)
    }catch (e) {
        dispatch({type: LOGOUT,payload:e, error: true})
    }
}