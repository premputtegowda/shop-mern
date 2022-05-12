import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'
const ProductScreen = () => {
    let { id } = useParams()
    const product = products.find((product) => product._id === id )
  return (
    <>
        <Link to="/">
            <Button variant="light">Go Back</Button>
            </Link>
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
                         <ListGroup.Item >  
                         <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="button" disabled={product.countInStock===0}>Add to Cart</button>
  
                            </div>
                         </ListGroup.Item>
                     </ListGroup>
                 </Card>
             </Col>
        </Row>
    </>
  )
}

export default ProductScreen