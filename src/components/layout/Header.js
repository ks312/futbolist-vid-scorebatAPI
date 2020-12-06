import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

const Header = () =>{
    return (
        <Navbar bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>Futbolist Video </Navbar.Brand>
          </Link>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link> 
          <Nav.Link as={Link} to="/about">About</Nav.Link> 
        </Nav>
      </Navbar>
    )
}
          
        

export default Header;