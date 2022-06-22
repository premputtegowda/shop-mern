import axios from 'axios'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
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

export const register = (name, email, password) => async(dispatch) => {
        try {

        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            'Content-Type': 'application/json'
        }
        const {data} = await axios.post('api/users', {name, email, password}, config)
        const userData = {
                id: data._id,
                name: data.name,
                email: data.email,
                isAdmin:data.isAdmin,
                token: data.token
        }
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: userData
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userData
        })

        localStorage.setItem('userInfo', JSON.stringify(userData))

        } catch(error) {

            dispatch({type:USER_REGISTER_FAIL,
                payload: error && error.response.data.msg ?
                error.response.data.msg : error.message} )

        }
}