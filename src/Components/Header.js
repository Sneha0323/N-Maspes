import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


function Header(){
return(
       
       <Navbar className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="assets/images/logo/logo.png"
              className="d-inline-block align-top"
              alt="Maspes logo"
            />
          </Navbar.Brand>
          <Nav className="links">
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#Features">Features</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Pricingplan">Pricing Plan</Nav.Link>
            <Nav.Link href="#Why-Application">Why Application</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact-Us">Contact Us</Nav.Link>
          </Nav>
          </Nav>
          <Button variant="success">Get the App</Button>{' '}
        </Container>
      </Navbar>
       
                  
)
}
export default Header;