import React, {useState, useEffect} from 'react'
import Product from '../components/Product'

import {Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async()=> {
            const { data}  = await axios.get('/api/products')
           
            setProducts(data)
        }
        fetchProducts()
       
    }, [])

  
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