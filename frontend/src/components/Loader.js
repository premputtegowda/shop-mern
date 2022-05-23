import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner animation="border" 
             role="status"
             style={{margin: 'auto',
                     display: 'block',
                     width: '100px',
                     height: '100px'}}>
        <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}

export default Loader