import axios from 'axios'
import { 
            CART_ADD_ITEM, 
            CART_REMOVE_ITEM,
            CART_CHANGE_QTY,
        } from '../constants/cartConstants'

export const addToCart = (data, qty) => async(dispatch, getState)=> {
    
    // const { data } = await axios.get(`/api/products/${id}`)

   
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            id: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
 
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const changeCartQty = (data, qty) => (dispatch, getState) =>  {
    console.log('payload data', data)
    dispatch ({type: CART_CHANGE_QTY,
         payload:
         {
            id: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
         }
        })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}

export const removeCartItem = (id) => (dispatch, getState)=> {

    dispatch({type: CART_REMOVE_ITEM,
              payload: id })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}