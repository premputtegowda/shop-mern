import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import { Link,  useNavigate,  useParams} from 'react-router-dom'
import {changeCartQty, removeCartItem} from '../actions/cartActions'
import { Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {FaTrashAlt} from 'react-icons/fa'
const CartScreen = () => {
    const {id} = useParams()
   
    const {cartItems}= useSelector(state => state.cart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    console.log('cartItems', cartItems)




const removeFromCartHandlelr = (id)=> (dispatch(removeCartItem(id)))
const checkoutHandler = ()=> {
    navigate('/shipping')
}
  return (
      <>
    <h1>
     Shopping Cart
    </h1>
    <Row>
        
        <Col md={8}>
            {cartItems.length === 0 ? 
                <Message>Your cart is empty <Link to='/'>Go Back</Link></Message>

             :
             <ListGroup variant='flush'>
                 {cartItems.map(item=> (
                     <ListGroup.Item key={item.id}>
                         <Row>
                             <Col md={2}>
                                 <Image src={item.image} alt={item.name} fluid rounded/>
                             </Col>
                             <Col md={3}>
                                 <Link to={`/product/${item.id}`}>{item.name}</Link>
                             </Col>
                             <Col md={2}>
                                 {item.price}
                             </Col>
                             <Col md={2}>
                             <Form.Control 
                                        as='select'
                                        value={item.qty} 
                                        onChange={(e)=>
                                                    dispatch(changeCartQty(item, Number(e.target.value)))}>
                                        {
                                            [...Array(item.countInStock).keys()].map(x=>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))
                                        }
                                    </Form.Control>
                             </Col>
                             <Col md={2}>
                                 <Button
                                    type='button'
                                    variant='light'
                                    onClick = {()=> removeFromCartHandlelr(item.id)}
                                    >
                                        <FaTrashAlt />
                                    </Button>
                             </Col>
                         </Row>

                     </ListGroup.Item>
                 ))}
             </ListGroup>}
         </Col>
         <Col md={4}>
             <ListGroup variant='flush'>
                 <ListGroup.Item>
                     
                     <h2>Subtotal: {cartItems.reduce((acc,item)=> acc + item.qty, 0)} items</h2>
      
                     {cartItems.reduce((acc, item)=> acc + item.qty * item.price , 0).toFixed(2)}
                  
                 </ListGroup.Item>
                 <ListGroup.Item>
               
            

                     <button class="btn btn-primary"
                                        onClick={checkoutHandler}
                                        type="button" 
                                        disabled={cartItems.length === 0}
                                >
                                   Proceed to checkout
                                </button>
                 </ListGroup.Item>
             </ListGroup>
                </Col>
        
    </Row>
    </>
  )
}

export default CartScreen