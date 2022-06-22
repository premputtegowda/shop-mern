import { USER_LOGIN_FAIL, 
        USER_LOGIN_REQUEST, 
        USER_LOGIN_SUCCESS, 
        USER_LOGOUT,
        USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST} from "../constants/userConstants";




export const userLoginReducer = (state= {}, action) => {

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{...state,
                 loading: true,
                 error: null
            }
        case USER_LOGIN_SUCCESS:
            return{...state,
                
                    userInfo: action.payload,
                 loading: false,
                 error: null
                }
        case USER_LOGIN_FAIL:
            return{...state,
                loading: false,
                 error: action.payload}

        case USER_LOGOUT:
            return{...state,
               
                userInfo: null,
                loading: false,
                error: null}
        default:
            return state
    }


}


export const userRegisterReducer = (state= {}, action) => {

    switch(action.type){
        case USER_REGISTER_REQUEST:
            return{...state,
                 loading: true,
                 error: null
                }
        case USER_REGISTER_SUCCESS:
            return{...state,
                
                userInfo: action.payload,
                 loading: false,
                 error: null
            }
                    
        case USER_REGISTER_FAIL:
            return{...state,
                         loading: false,
                          error: action.payload}
        
        default:
            return state
    }


}
