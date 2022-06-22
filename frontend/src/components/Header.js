import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../actions/userActions'
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FaShoppingCart,FaUser  } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userInfo = useSelector(state => state.userLogin.userInfo)
  

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/login')
  }

  console.log('header', userInfo)

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
                        { userInfo ? 
                           (<NavDropdown title={userInfo.name} id='username'>
                           <Link to='/profile'>
                             <NavDropdown.Item>Profile</NavDropdown.Item>
                           </Link>
                           <NavDropdown.Item onClick={logoutHandler}>
                             Logout
                           </NavDropdown.Item>
                         </NavDropdown>)
                        :(
                          <Nav.Link as={Link} to="/login"><FaUser size='1.0rem' style={{margin:'.5rem'}} />Sign In</Nav.Link>
                        ) }

                        
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header