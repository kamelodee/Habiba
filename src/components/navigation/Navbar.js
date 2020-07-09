import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SearchForm from './SearchForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus ,faUserCircle} from '@fortawesome/free-solid-svg-icons'

export default function navbar() {
    return (
   <Navbar collapseOnSelect expand="lg" bg="white" variant="light"  sticky="top" className=" navbar-bg" >
  <Navbar.Brand className="brand" href="#home">Habiba</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="menu-toggler"/>
        <Navbar.Collapse id="responsive-navbar-nav">  
    <Nav className="m-auto">
    <SearchForm />   
          </Nav>
       
    <Nav className="mr-7">
            <Nav.Link href="#deets" className="nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
              Hi Login
               
      </Nav.Link>
            
            <Nav.Link href="#deets" className="nav-item">
            <FontAwesomeIcon icon={faCartPlus} />
              Cart</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar> 
    
    )
}
