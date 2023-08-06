import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Header() {
  
  return (
    <>
    <Container >
      <Navbar className="m-4" sticky="top">
        <Container>
          <Navbar.Brand href="/" className='p-1'>
            <img
              src="assets/images/logo/logo.png"
              className="d-inline-block align-top mb-2"
              alt="Maspes logo"
            />
          </Navbar.Brand>
          <Nav className="links btn-outline-{variant}">
            <Nav className="mx-3 " style={{fontSize:'18px'}}>
              <Nav.Link className="mx-2" href="/">Home</Nav.Link>
              <Nav.Link className="mx-2" href="#Features">Features</Nav.Link>
              <Nav.Link className="mx-2" href="#Services">Services</Nav.Link>
              <Nav.Link className="mx-2" href="#Pricingplan">Pricing Plan</Nav.Link>
              <Nav.Link className="mx-2" href="#Why-Application">Why Application</Nav.Link>
              <Nav.Link className="mx-2" href="#About">About</Nav.Link>
              <Nav.Link className="mx-2" href="#Contact-Us">Contact Us</Nav.Link>
            </Nav>
          </Nav>
          <Button variant="success">Get the App</Button>
        </Container>
      </Navbar>
            </Container>
    </>

  )
}
export default Header;