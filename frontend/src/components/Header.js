import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { FaShoppingCart,FaUser  } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Link to="/">
                    <Navbar.Brand >MyShop</Navbar.Brand>
                </Link>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
        
                        <Nav.Link as={Link} to="/cart"><FaShoppingCart size="1.0rem" style={{margin:'.5rem'}}/>Cart</Nav.Link>
                  

                    
                        <Nav.Link as={Link} to="/login"><FaUser size='1.0rem' style={{margin:'.5rem'}} />Sign In</Nav.Link>
 
                
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header