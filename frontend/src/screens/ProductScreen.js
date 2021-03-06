import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card, Form } from 'react-bootstrap'

import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { useDispatch, useSelector } from 'react-redux'
//actions
import { listProductDetails } from '../actions/productActions'
import { addToCart } from  '../actions/cartActions'


const ProductScreen = () => {
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()
    let { id } = useParams()
    const dispatch = useDispatch()
    const { product, loading ,error} = useSelector(state => state.productDetails)
    
    useEffect(()=> {
       dispatch(listProductDetails(id))
    }, [id, dispatch])

    const addToCartHandler = () => {
        dispatch(addToCart(product, Number(qty)))
        navigate('/cart')
    }  
    return (
    <>
        <Link to="/">
            <Button variant="light">Go Back</Button>
        </Link>
        { loading ? <Loader /> 
            : error ? <Message > { error }</Message>
            : (
                <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid/>
            
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                       <Rating 
                        value={product.rating}
                        text = {`${product.numReviews} reviews`}
                       />
                    </ListGroup.Item>
                    <ListGroup.Item>
                       Price: ${product.price}
                    </ListGroup.Item>
                    <ListGroup.Item>
                       Description: ${product.description}
                    </ListGroup.Item>
                   
                </ListGroup>
            </Col>
             <Col md={3}>
                 <Card>
                     <ListGroup variant='flush'>
                         <ListGroup.Item>
                             <Row>
                                 <Col>Price:</Col>
                                 <Col><strong>${product.price}</strong></Col>
                             </Row>
                         </ListGroup.Item>
                         <ListGroup.Item >
                             <Row>
                                 <Col>Status:</Col>
                                 <Col>{product.countInStock>0 ? 'In Stock': 'Out of Stock'}</Col>
                             </Row>
                         </ListGroup.Item>
                            {
                            product.countInStock > 0 && 
                             <ListGroup.Item>
                             <Row>
                                 <Col>
                                    Quantity
                                 </Col>
                                 <Col>
                                    <Form.Control as='select'
                                        value={qty} onChange={(e)=>
                                        setQty(e.target.value)}>
                                        {
                                            [...Array(product.countInStock).keys()].map(x=>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                            ))
                                        }
                                    </Form.Control>
                                   </Col>
                                           
                                 </Row>
                                    
                         
                         </ListGroup.Item>

                            }

                         <ListGroup.Item >  
                         <div class="d-grid gap-2">
                                <button class="btn btn-primary"
                                        onClick={addToCartHandler}
                                        type="button" 
                                        disabled={product.countInStock===0}
                                >
                                    Add to Cart
                                </button>
  
                            </div>
                         </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
        </Row>
            )
        }
        
    </>
  )
}

export default ProductScreen