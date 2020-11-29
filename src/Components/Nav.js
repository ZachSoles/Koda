import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return(
        <Navbar inverse bg="info" fixed="top" variant="dark">
            <Navbar.Brand>Koda</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="">Editor</Nav.Link>
                <Nav.Link href="">Github</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="">Made by Zach Soles</Nav.Link>
                <Nav.Link></Nav.Link>
                <Button variant="primary">Download</Button>
            </Nav>
        </Navbar>
    );

}

export default NavBar;