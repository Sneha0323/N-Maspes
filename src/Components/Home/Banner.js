import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Banner() {
    return (
        <>
            <Container className="p-2">
                <Row>
                    <Col sm={7} style={{ position: 'relative' }}>
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
                    <Col sm={5}>
                        <Image src='assets/images/shape/about_s4_lines 1.png' alt="about_s4_line" rounded />
                        {/* <img src="../src/assets/svg/banner.svg" class="img-fluid aos-init aos-animate" data-aos="fade-left" data-aos-delay="1500" alt="banner svg"/> */}
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Banner;