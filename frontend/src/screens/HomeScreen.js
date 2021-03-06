import React, {useState, useEffect} from 'react'
import Product from '../components/Product'
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

import {Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const {products, loading, error}= useSelector(state => state.productList)
    console.log('products', products)
    useEffect(()=>{
        dispatch(listProducts())
    }, [dispatch])

  
  return (
    <>
        <h1>
            Latest Products
        </h1>
        { loading ? <Loader />
        : error ? (<h3> <Message variant='danger'>
                {error}
                </Message>
            </h3>)
        : (
            <Row>
            {products.map((product)=>(
                <Col key={product._id}sm={12} md={6} lg={4} xl={3}>
                    <Product key={product._id} product = {product} />
                </Col>
            ))}
            </Row>
        )
        }
       
    </>
  )
}
export default HomeScreen