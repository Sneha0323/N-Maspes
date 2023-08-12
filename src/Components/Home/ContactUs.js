import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function ContactUs() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center mt-4">
                    <Col md={8} sm={12}>
                        <Card border="light" className="text-center py-5">
                            <Card.Subtitle>Contact Us</Card.Subtitle>
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
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            </Col>
                            <Col md={4} sm={12} className="p-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                      <Form.Label>EMAIL</Form.Label>
                                <Form.Control type="email" placeholder="Your email" />
                            </Form.Group>
                            </Col>
                            <Col md={4} sm={12} className="p-3">
                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>PHONE</Form.Label>
                                <Form.Control placeholder="Your Phone" />
                            </Form.Group>
                            </Col>
                        <Col md={8} sm={12} className="p-3">
                                <Form.Group as={Col} controlId="formGridMessage">
                                    <Form.Label>MESSAGE</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>
                            </Col>
                            <Col md={4}  className="d-grid p-3" sm={12}>
                                <Button type="button" variant="outline-light"> Send Message</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </Container>
        </>
    )

}
export default ContactUs