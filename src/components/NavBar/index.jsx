import React,{memo} from 'react';
import Logo from '../../assets/logo.svg';
import {useSelector,useDispatch} from 'react-redux';
import styled from 'styled-components/'
import "./navbar.css";
import { ToggleSwitch,LightTheme,DarkTheme} from '../index';
import {Navbar,Form,NavDropdown,Nav,FormControl,Container} from 'react-bootstrap';

const Light = ({children}) => {
  return(<Navbar id="navbar" expand="lg" fixed="top" variant="light" >
    {children}
  </Navbar>  
  )
}
const Dark = ({children}) => {
  return( <Navbar variant="dark"  expand="lg" fixed="top">
    {children}
  </Navbar>  
  )
}
const Button = styled.button`
    background-color: #198754;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    height: 3rem;
    padding: 0 1rem 0 1rem;
    border: 2px solid #198754;
    &:hover {
        border-radius: 8px;
        background: transparent;
    }
    @media (max-width: 992px) {
        align-self: center;
    }
`

const NavChildren = ({children}) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  return (
    <Container fluid  >
    <Navbar.Brand id="navbar-links" href="#">
      <img src={Logo} height="48" width="48" alt="Brand Logo" /> Dev Learner
    </Navbar.Brand>
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
      <Nav  className="d-flex"
        style={{ maxHeight: '100px' }}
        navbarScroll>
     {children ?? ""}
     <ToggleSwitch Title="Dark Mode" state={theme === "dark" ? true : false} event={() => theme === "dark" ? dispatch(LightTheme()) : dispatch(DarkTheme())}/>
     </Nav>
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
  )
}

const LightNavBar = () => {
  return <Light>
    <NavChildren />
  </Light>
}

const DarkNavBar = () => {
  return <Dark>
  <NavChildren />
  </Dark>
}
function NavBar() {
  const theme = useSelector(state => state.theme);
  return (
    (theme === "dark") ? <DarkNavBar/>: <LightNavBar />
  )
}

export default memo(NavBar)
