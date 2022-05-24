import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import { Link, useSearchParams, useParams} from 'react-router-dom'
import {addToCart} from '../actions/cartActions'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'

const CartScreen = () => {
    const {id} = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const qty = parseInt(searchParams.get('qtys'))
    const {cartItems}= useSelector(state => state.cart)
    const dispatch = useDispatch()
    
   console.log("qty", cartItems)
   console.log('id', id)

    useEffect(()=> {
        if(id){
            dispatch(addToCart(id, qty))
        }
        
    }, [dispatch, id, qty])
  return (
    <Row>
        <Col md={8}>
            {/* {cartItems.length === 0 ? 
                <Message>Your cart is empty <Link to='/'>Go Back</Link></Message>

             : null
            } */}
        </Col>
        <Col md={2}>

        </Col>
        <Col md={2}>

        </Col>
    </Row>
  )
}

export default CartScreen