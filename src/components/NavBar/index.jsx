import React from 'react';
import "./navbar.css";

import { ToggleSwitch } from '../index';
import {Navbar,Form,NavDropdown,Button,Nav,FormControl,Container} from 'react-bootstrap'
function NavBar() {
  return (
    <Navbar bg="transparent" expand="lg" >
  <Container fluid id="navbar" className="boxshadow">
    <Navbar.Brand id="navbar-links" href="#">Tech Chad</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link id="navbar-links" href="#action1">About us</Nav.Link>
        <Nav.Link id="navbar-links" href="#action2">Contact</Nav.Link>
        <NavDropdown title="Blog" id="navbarScrollingDropdown">
          <NavDropdown.Item id="navbar-links" href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item id="navbar-links" href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item id="navbar-links" href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <ToggleSwitch />

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
