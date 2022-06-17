import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants'


export const login = (email, password) => async(dispatch, getState) => {
    try{
        dispatch({type: USER_LOGIN_REQUEST})

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login',{email, password},
         config)

      

         dispatch({
             type: USER_LOGIN_SUCCESS,
             payload: {
                 id: data._id,
                 name: data.name,
                 email: data.email,
                 isAdmin:data.isAdmin,
                 token: data.token
             },
         })

         localStorage.setItem('userInfo', JSON.stringify(getState().userLogin.userInfo))
         
    } catch(error){
        dispatch({type:USER_LOGIN_FAIL,
            payload: error && error.response.data.msg ?
            error.response.data.msg : error.message} )
    }
    
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:USER_LOGOUT})

}