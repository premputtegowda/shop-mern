import { CART_ADD_ITEM , CART_REMOVE_ITEM, CART_CHANGE_QTY} from "../constants/cartConstants"

const initialState = {
    cartItems: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
}
export const cartReducer = (state = initialState, action)=> {

    console.log('state cart', state.cartItems)
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            console.log('item to be added', item)
            const existItem = state.cartItems.find((x => x.id === item.id ))
           

            if (existItem){
                console.log('xxx')
                return {
                    ...state,
                    cartItems: state.cartItems.map( x => 
                        x.id===item.id ? {...x, qty: x.qty + item.qty} : x
                        )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_CHANGE_QTY:
            const product = action.payload
        
         
                return {
                    ...state,
                    cartItems: state.cartItems.map( x => 
                        x.id === product.id ? {...x, qty: product.qty} : x
                        )
                }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id !== action.payload)
            }
            

        default:
            return state
    }
}