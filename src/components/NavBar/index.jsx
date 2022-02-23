import React from 'react'
import Logo from "../../assets/logo.svg"
import {Navbar,Container,Nav,NavDropdown,Offcanvas,Button,Form,FormControl} from 'react-bootstrap/';
import {Marginer,ToggleSwitch} from "../index";
import {useSelector,} from 'react-redux';
import "./navbar.css";


const NavBarContainer = () =>{
    return <Container fluid>
    <Navbar.Brand href="/home" id="nav-brand"><img src={Logo}  height="40" width="40" />{' '}
      Tech Chad</Navbar.Brand>{' '}
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3 container round-container boxshadow">
          <h3 className="NavbarTitle">Pages</h3>
          <Nav.Link href="#action1" id="nav-links">Home</Nav.Link>
          <Nav.Link href="#action2" id="nav-links">Blog</Nav.Link>
        </Nav>
        <Marginer  direction="vertical" margin="10px"/>
        <Nav className="justify-content-end flex-grow-1 pe-3 container round-container boxshadow">
          <h3 className="NavbarTitle">Settings</h3>
          <ToggleSwitch id="nav-links" />
        </Nav>
        <Marginer  direction="vertical" margin="10px"/>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
}
const Dark = () => {
    return (
        <Navbar bg="dark" variant="dark" expand={false} fixed="top" className="boxshadow">
        <NavBarContainer />
</Navbar>
  )
}



const Light = () => {
    return (
        <Navbar bg="light" expand={false} fixed="top" className="boxshadow">
        <NavBarContainer />
        </Navbar>
  )
}

function NavBar() {
    const theme = useSelector((state) => state.theme);
    return (theme === "dark") ? (<Dark /> ): <Light />;
}

export default NavBar
