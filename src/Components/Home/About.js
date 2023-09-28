import { Col, Container, Row, Card, Image } from "react-bootstrap";

function About() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-start my-4" id="About">
                    <Col md={6} sm={12} className="mt-3 px-3">
                        <Card border="light" className="py-4">
                            <Card.Subtitle className="py-2" style={{ color: '#539E83' }}>
                                About US
                            </Card.Subtitle>
                            <Card.Img src="assets/images/about/line.png" style={{ width: '5%' }} />
                            <Card.Title className="py-2" as="h2">
                                We Believe In Good Ideas Flexibility & Precission
                            </Card.Title>
                            <Card.Text>
                                Our team helps people who want to become entrepreneurs and run businesses. Our on-demand app and website development services are designed to provide businesses with cutting-edge solutions. We specialize in a range of solutions, including
                            </Card.Text>
                            <Card.Text>
                                Duis turpis neque laoreet sit amet ipsum quis lacinia vestibulum libero. Suspendisse feugiat lacus nec nisi feugiat dignissim. Etia ornare tincidunt felis nec facilisis libero cursus. Suspendisse sed lacus ornare pretium neque nec ornare lacus. In non eros augue dapibus quam Maecenas lacini erat a varius convall. A Different Kind Of Company Should Follow Different Kind Of App Installation.Praesent faucibus leo eu egestas scelerisque. Vivamus euismod molestie sollicitudin.
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col md={6} sm={12}>
                        <Image src="assets/images/about/about.png" alt="about" data-aos="zoom-in-down" />
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default About;