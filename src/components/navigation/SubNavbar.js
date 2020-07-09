import React from 'react'
import CategoriesSections from '../categories/CategoriesSections'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export default function SubNavbar() {
    return (
        <div className="navbar-bg">
           <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className=" navbar-bg" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
              <Nav.Link href="#features" className="subnav-item category-item">categories
               <div className="cate">
                  <CategoriesSections/>
               </div>
                </Nav.Link>
                <Nav.Link href="#pricing" className="subnav-item">Pricing</Nav.Link>
                <Nav.Link href="#pricing" className="subnav-item">Pricing</Nav.Link>
                <Nav.Link href="#pricing" className="subnav-item">Pricing</Nav.Link>
                <Nav.Link href="#pricing" className="subnav-item">Pricing</Nav.Link>
                <Nav.Link href="#pricing" className="subnav-item">Pricing</Nav.Link>
                <Nav.Link href="#pricing" className="subnav-item">Pricing</Nav.Link>
                </Nav>
                <Nav>
      
          <Nav.Link eventKey={2} href="#memes" className="subnav-item">
        Add Your Store Here
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
        </div>
    )
}
