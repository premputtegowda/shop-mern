import React from 'react'
import Product from '../components/Product'
import products from '../products'
import {Container, Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  
  return (
    <>
        <h1>
            Latest Products
        </h1>
        <Container>

            <Row>
            {products.map((product)=>(
                <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product = {product} />
                </Col>
            ))}
            </Row>
        </Container>
    </>
  )
}
export default HomeScreen