import React from "react";
import { Container, Navbar } from "react-bootstrap";
// import Features from "./Features";
import Register from "./Registration";

function Navbar1() {
    return(
        <>
        <Navbar bg="success" expand="sm" variant="dark">
            <Container>
                <Navbar.Brand href="/">React BootStrap</Navbar.Brand>
            </Container>
            </Navbar>  
            {/* <Features/> */}
            <Register/>
        </>
    )
    
}
export default Navbar1