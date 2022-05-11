import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'
import { FaShoppingCart,FaUser  } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">MyShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart"><FaShoppingCart size="1.5rem" style={{padding:'.3rem'}}/>Cart</Nav.Link>
                    <Nav.Link href="/login"><FaUser size='1.5rem' style={{padding:'.3rem'}} />Sign In</Nav.Link>
                
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header