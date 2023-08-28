import { Button, Nav, Navbar, Container } from 'react-bootstrap';


function Header() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 100,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar className="my-4 bg-body-tertiary" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/" className='p-1'>
            <img
              src="assets/images/logo/logo.png"
              className="d-inline-block align-top mb-2"
              alt="Maspes logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-center mx-5" style={{ fontSize: '20px' }} as="h6">
              <Nav.Link className="mx-2" onClick={handleClick} href="#Home" >Home</Nav.Link>
              <Nav.Link className="mx-2" onClick={handleClick} href="#Features">Features</Nav.Link>
              <Nav.Link className="mx-2" onClick={handleClick} href="#Services">Services</Nav.Link>
              <Nav.Link className="mx-2" onClick={handleClick} href="#Pricingplan">Pricing Plan</Nav.Link>
              <Nav.Link className="mx-2" onClick={handleClick} href="#Why-Application">Why Application</Nav.Link>
              <Nav.Link className="mx-2" onClick={handleClick} href="#About">About</Nav.Link>
              <Nav.Link className="mx-2" onClick={handleClick} href="#Contact-Us">Contact Us</Nav.Link>
            </Nav>
            <Button className="justify-content-end" variant="success">Get the App</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}
export default Header;