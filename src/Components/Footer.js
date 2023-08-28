import React from "react";
import { Col, Container, Row, Card, Image, Navbar, NavLink, Nav, Button } from "react-bootstrap";

function Footer() {
    return (
        <>
            <Container>
                <Card>
                    <Image src="assets/images/footer/footer.png" />
                    <Card.ImgOverlay>
                        <Row className="my-4 py-4 justify-content-md-between">
                            <Col md={4} sm={12} className="p-3">
                                <Card border="light" bg="transparent">
                                    <Card.Title as="h1" className="pt-5">
                                        Get Useful App With Best Features
                                    </Card.Title>
                                </Card>
                                <Image src="" className="d-block" />
                            </Col>
                            <Col md={2}>
                                <Navbar>
                                    <Nav className="flex-column">
                                        <Navbar.Brand className="mx-2" text-variant="success" as="h4">Links</Navbar.Brand>
                                        <NavLink href="#Features">Freatures</NavLink>
                                        <NavLink href="#Services">Our Services</NavLink>
                                        <NavLink href="#Why-Application">Why Services</NavLink>
                                        <NavLink href="#About">How It Work</NavLink>
                                    </Nav>
                                </Navbar>
                            </Col>
                            <Col md={2}>
                                <Navbar>
                                    <Nav className="flex-column">
                                        <Navbar.Brand as="h4">Get In Touch</Navbar.Brand>
                                        <Row className="justify-content-md-start">
                                            <Col md={1} className="pt-2">
                                                <Image src="https://maspes.io/static/media/call.97834d062f52571c87e3c968020ba4ce.svg" />
                                            </Col>
                                            <Col md={10}>
                                                <NavLink href="tel:+21 123 456 5523" as="h3">+21 123 456 5523</NavLink>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-start">
                                            <Col md={2} className="pt-2">
                                                <Image src="https://maspes.io/static/media/email.b88ebbaf3194cffd71d66f2eed756597.svg" />
                                            </Col>
                                            <Col md={9}>
                                                <NavLink href="tel:+21 123 456 5523" as="h5">Info@Maspes.Com</NavLink>
                                            </Col>
                                        </Row>
                                        <Row className="pt-3">
                                            <Col md={9}>
                                                <Row className="justify-content-md-between">
                                                    <Col md={2} className="pt-2">
                                                        <Image src="https://maspes.io/static/media/facebook.c2613efddce405cc28127ecdffd3667d.svg" />
                                                    </Col>
                                                    <Col md={2} className="pt-2">
                                                        <Image src="https://maspes.io/static/media/twitter.53965efb03918479de12da413cb1cdb7.svg" />
                                                    </Col>
                                                    <Col md={2} className="pt-2">
                                                        <Image src="https://maspes.io/static/media/insta.0adc552fb6ae673c6afc483f5b66590f.svg" />
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Navbar>
                            </Col>
                            <Col md={2}>
                                <Navbar>
                                    <Nav className="flex-column">
                                        <Navbar.Brand as="h4">App Download</Navbar.Brand>
                                        <Row className="justify-content-md-start">
                                            <Col md={10} className="pt-2">
                                                <Button variant="outline-success" style={{ borderRadius: "20px" }} >
                                                    <Row className="justify-content-md-start" style={{
                                                        display: "flex",
                                                        flexDirection: "row"
                                                    }}>
                                                        <Col md={2}>
                                                            <i class="bi bi-apple">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                                                </svg>
                                                                <Image src="" />
                                                            </i>
                                                        </Col>
                                                        <Col md={10}>
                                                            <Row className="text-align-start" >Available On The</Row>
                                                            <Row className="justify-content-md-start">App Store</Row>
                                                        </Col>
                                                    </Row>
                                                </Button>
                                            </Col>
                                        </Row>
                                        <Row className="justify-content-md-start">
                                            <Col md={8} className="pt-2">
                                                <Button variant="outline-success">
                                                    {/* <Image src="assets/images/icon/001-google-play.png" /> */}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Navbar>
                            </Col>
                        </Row>
                    </ Card.ImgOverlay>
                </Card>
            </Container>
        </>
    )
}
export default Footer