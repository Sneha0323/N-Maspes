import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function ContactUs() {
    return (
        <>
            <Container id="Contact-Us">
                <Row className="justify-content-md-center mt-4" >
                    <Col md={8} sm={12}>21
                        <Card border="light" className="text-center py-5" style={{ alignItems: 'center' }}>
                            <Card.Subtitle className="py-2" style={{ color: '#539E83' }}>
                                Contact Us
                            </Card.Subtitle>
                            <Card.Img src="assets/images/about/line.png" style={{ width: '4%' }} />
                            <Card.Title className="py-3" as="h3">
                                Get In Touch With Us
                            </Card.Title>
                            <Card.Text className="py-3">
                                Duis gravida augue velit eu dignissim felis posuere quis. Integ ante urna gravid nec est in molestie mattis risus tempus tincidunt orci at turpis gravida
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Card bg="success" text="light" className="px-4" border="light" style={{ borderRadius: "18px" }} >
                    <Form className="md">
                        <Row className="p-4 mt-4">
                            <Col md={4} sm={12} className="p-3">
                                <Form.Group as={Col} controlId="formGridName">
                                    <Form.Label>NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" className="py-2" />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12} className="p-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>EMAIL</Form.Label>
                                    <Form.Control type="email" placeholder="Your email" className="py-2" />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12} className="p-3">
                                <Form.Group as={Col} controlId="formGridPhone">
                                    <Form.Label>PHONE</Form.Label>
                                    <Form.Control placeholder="Your Phone" className="py-2" />
                                </Form.Group>
                            </Col>
                            <Col md={8} sm={12} className="p-3">
                                <Form.Group as={Col} controlId="formGridMessage">
                                    <Form.Label>MESSAGE</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" className="py-2" />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12} className="mt-5">
                                <Button type="button" variant="outline-light" className="py-2 px-5" style={{ width: '100%' }}> Send Message</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>
    )

}
export default ContactUs