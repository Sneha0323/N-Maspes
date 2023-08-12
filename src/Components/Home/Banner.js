import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Banner() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={7} style={{ position: 'relative' }} sm={12}>
                        <Image src='assets/images/svg/bannerBg.svg' alt="banner bg" />
                        <Card.ImgOverlay>
                            <Container className="p-5 ">
                                <Card.Title className="position-relative" as="h1">
                                    Elevate Your Food & Restaurant Business
                                    With {" "}
                                    <Image src='assets/images/feature/maspes.png' className="mt-3 px-3" alt="Maspes logo" />
                                </Card.Title>
                                <Card.Text className=" pt-5" as="h3">An Ultimate Ordering And Delivery Solution</Card.Text>

                                <Card.Text className="pt-4" as="h5">With Food Delivery App Development, You Can Get A</Card.Text>
                                <Card.Text className="pt-2">
                                    business-focused solution that will help your business succeed. Our dedicated
                                    developers will work with you to ensure you have full control over your
                                    restaurant's business activities.
                                </Card.Text>
                            </Container>
                        </Card.ImgOverlay>

                    </Col>
                    <Col md={5} sm={12} >
                        <Card bg="transparent" border="light">
                            <Image src='assets/images/shape/about_s4_lines 1.png' alt="about_s4_line" />
                            <Card.ImgOverlay>
                                <Image src="https://maspes.io/static/media/banner.3d2cccd44c867e74beb64814eeb0d201.svg" class="img-fluid aos-init aos-animate" data-aos="fade-left" data-aos-delay="1500" alt="banner svg" />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Banner;