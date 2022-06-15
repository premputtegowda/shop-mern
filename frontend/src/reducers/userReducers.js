import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../constants/productConstant";
const initialState = {
    userLogin:  {userInfo: localStorage.getItem('cartItem') || {}}
}
export const userLoginReducer = (state= initialState, action) => {

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return{...state.userInfo, loading: true}
        case USER_LOGIN_SUCCESS:
            return{...state.userInfo, loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return{...state.userInfo, loading: false, error: action.payload}
    }

}