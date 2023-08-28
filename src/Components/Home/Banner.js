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
                                <Card.Title className="position-relative" as="h1" id="Home" data-aos="zoom-in-up" data-aos-delay="600">
                                    Elevate Your Food & Restaurant Business
                                    With {" "}
                                    <Image src='assets/images/feature/maspes.png' className="mt-3 px-3" alt="Maspes logo" />
                                </Card.Title>
                                <Card.Text className=" pt-5" as="h3" data-aos="zoom-in-up" data-aos-delay="800">
                                    An Ultimate Ordering And Delivery Solution
                                </Card.Text>

                                <Card.Text className="pt-4" as="h5" data-aos="zoom-in-up" data-aos-delay="1000">
                                    With Food Delivery App Development, You Can Get A
                                </Card.Text>
                                <Card.Text className="pt-2" data-aos="zoom-in-up" data-aos-delay="1100">
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
                                <Image src="assets/images/svg/banner.svg" class="img-fluid aos-init aos-animate"
                                    data-aos="fade-left"
                                    data-aos-anchor="#example-anchor"
                                    data-aos-delay="1600"
                                    data-aos-offset="500"
                                    data-aos-duration="500" />
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Banner;