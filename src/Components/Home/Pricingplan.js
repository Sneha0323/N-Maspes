import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";

function Pricingplan() {
    return (
        <>
            <Container >
                <Row className="justify-content-center" id="Pricingplan">
                    <Col md={8} sm={12}>
                        <Card className="text-center mt-1 pt-4" border="light" style={{ alignItems: 'center' }}>
                            <Card.Subtitle className="py-2" style={{ color: '#539E83' }}>
                                Princing Plan
                            </Card.Subtitle>
                            <Card.Img src="assets/images/about/line.png" style={{ width: '4%' }} />
                            <Card.Title className="p-3">Our Customer-Centered Plans</Card.Title>
                            <Card.Text className="px-1">We believe in putting our customers first, which is why all our plans are designed with their needs in mind. From flexible payment options to personalized support, our customer-centered plans ensure that you get the best possible experience with our services.</Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="mt-4 g-4">
                    <Col md={4} sm={6}>
                        <Card bg="transparent" text="dark" className="px-4" border="light" data-aos="fade-up" data-aos-duration="1800">
                            <Card.Header>
                                <Card.Subtitle className="pt-4">Bronze</Card.Subtitle>
                                <Card.Text as="h3">
                                    $19</Card.Text>
                                <span> / Month</span>
                                <Card.Text>Get 7 Days Free Trial</Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled">
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "}Web & Mobile Optimized
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "}CLifetime Free Usage
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "}Lifetime Free Usage
                                    </li>
                                    <li className="my-3" style={{ color: "gray" }}><Image src="assets/images/svg/Right-sign-blue.svg" alt="right-sign" />
                                        {" "} 3 Month Support
                                    </li>
                                    <li className="my-3" style={{ color: "gray" }}><Image src="assets/images/svg/Right-sign-blue.svg" alt="right-sign" />
                                        {" "} No Installation Charges
                                    </li>
                                    <li className="my-3" style={{ color: "gray" }}><Image src="assets/images/svg/Right-sign-blue.svg" alt="right-sign" />
                                        {" "} Inbuilt Malware Scanner
                                    </li>
                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="success" bg="transparent" className="mb-3">Get Started</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card bg="success" text="light" className="px-4" border="light" style={{ borderRadius: "18px" }} data-aos="fade-up" data-aos-duration="2000">
                            <Card.Header>
                                <Card.Subtitle className="pt-4 mx-3" >Silver</Card.Subtitle>
                                <Card.Text className="mx-3" as="h3">
                                    $49</Card.Text>
                                <span> / Month</span>
                                <Card.Text className="mx-3">Get 7 Days Free Trial</Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled">
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign-white.svg" alt="right-sign" />
                                        {" "}Web & Mobile Optimized
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign-white.svg" alt="right-sign" />
                                        {" "}CLifetime Free Usage
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign-white.svg" alt="right-sign" />
                                        {" "}Lifetime Free Usage
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign-white.svg" alt="right-sign" />
                                        {" "} 3 Month Support
                                    </li>
                                    <li className="my-3" style={{ color: "rgb(134, 232, 203)" }}><Image src="assets/images/svg/Right-sign-grey.svg" alt="right-sign" />
                                        {" "} No Installation Charges
                                    </li>
                                    <li className="my-3" style={{ color: "rgb(134, 232, 203)" }}><Image src="assets/images/svg/Right-sign-grey.svg" alt="right-sign" />
                                        {" "} Inbuilt Malware Scanner
                                    </li>
                                </ul>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="light" className="mb-3"> Get Started</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card bg="transparent" text="dark" className="px-4" border="light" data-aos="fade-up" data-aos-duration="2200">
                            <Card.Header>
                                <Card.Subtitle className="pt-4">Bronze</Card.Subtitle>
                                <Card.Text as="h3">
                                    $19</Card.Text>
                                <span> / Month</span>
                                <Card.Text>Get 7 Days Free Trial</Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <ul className="list-unstyled">
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "}Web & Mobile Optimized
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "}CLifetime Free Usage
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "}Lifetime Free Usage
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "} 3 Month Support
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "} No Installation Charges
                                    </li>
                                    <li className="my-3"><Image src="assets/images/svg/Right-sign.svg" alt="right-sign" />
                                        {" "} Inbuilt Malware Scanner
                                    </li>
                                </ul>
                            </Card.Body>
                            <Card.Footer bg="dark">
                                <Button variant="success" className="mb-3">Get Started</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center mt-4">
                    <Col md={8} sm={12}>
                        <Card className="text-center py-5" border="light">
                            <Card.Title>
                                Restaurant App Models We Serve
                            </Card.Title>
                            <Card.Img src="assets/images/about/line.png" style={{ width: '4%' }} />
                            <Card.Text className="py-3">
                                As a leading food delivery app development company, we help our clients get customized solutions as per their needs and budget. Here are two top models that we serve:
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src="assets/images/svg/restaurant.svg" alt="resturant" />
                    </Col>
                    <Col md={6}>
                        <Row className="mt-4">
                            <Card className="p-3" border="light">
                                <Card.Title>Admin App - Client App</Card.Title>
                                <Card.Text className="mt-2">
                                    If you choose this model, we’ll provide you with two interfaces. The first one is for the restaurant owner/manager to manage the menu, orders, and reservations. And the second is for customers to place their orders and make reservations. This model provides a more personalized experience for customers, allowing them to easily browse the menu, customize their orders, and track their delivery status.</Card.Text>
                            </Card>
                        </Row>
                        <Row>
                            <Card className="p-3" border="light">
                                <Card.Title>Admin App - Web App</Card.Title>
                                <Card.Text className="mt-2">
                                    This model will give you an admin app along with a web app. It is ideal for one who does not have much funds to invest in multiple apps. The restaurant staff uses the admin app to manage menus, orders, and reservations, while the web application serves as the customer-facing platform. Customers can place their orders and make reservations from any device with internet access.
                                </Card.Text>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Pricingplan;