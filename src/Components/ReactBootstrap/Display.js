import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Register from "./Registration";
import UserList from "./UserList";

function Display() {
    return(
        <>
        <Navbar bg="success" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="/">React BootStrap</Navbar.Brand>
            </Container>
            </Navbar>  
            <Register/>
            <UserList/>
        </>
    )
    
}
export default Display