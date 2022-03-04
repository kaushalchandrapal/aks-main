import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import './index.scss';

const Header = () => {
  return (
    <>
        <div className='header-component-css'>
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="/">Contact Management System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="header-component-css">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/Add">Add Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
          </Navbar>  
        </div>
    </>
  );
};

export default Header;