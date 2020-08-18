  
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import barber6 from '../assets/barber6.png';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => ( 
    <Styles>
    <Navbar expand = "lg" >
    <Navbar.Brand href = "/" ><img src={barber6} alt="barber" />< /Navbar.Brand> 
    <Navbar.Toggle aria-controls = "basic-navbar-nav" / >
    <Navbar.Collapse id = "basic-navbar-nav" >
      <Nav className="ml-auto">
      <Nav.Item > < Nav.Link href = "/" > Home < /Nav.Link></Nav.Item >
      <Nav.Item > < Nav.Link href = "/services" > Services < /Nav.Link></Nav.Item >
      <Nav.Item > < Nav.Link href = "/contact" > Contact < /Nav.Link></Nav.Item >
   </Nav>
   </Navbar.Collapse> 
 </Navbar> 
</Styles>


)
