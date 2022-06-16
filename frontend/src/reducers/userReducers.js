import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/userConstants";
const initialState = {
    userInfo: null,
    loading: false,
    error: null
}
export const userLoginReducer = (state= initialState, action) => {

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{...state,
                 loading: true,
        
                }
        case USER_LOGIN_SUCCESS:
            return{...state,
                    userInfo: {...action.payload},
                     loading: false
                    }
        case USER_LOGIN_FAIL:
            return{...state,
                         loading: false,
                          error: action.payload}
        default:
            return state
    }


}