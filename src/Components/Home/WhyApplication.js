import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

function Whyapplication() {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center mt-4" id="Why-Application">
                    <Col md={8} sm={12}>
                        <Card border="light" className="text-center py-5" style={{ alignItems: 'center' }}>
                            <Card.Subtitle className="py-2" style={{ color: '#539E83' }}>
                                Why Application
                            </Card.Subtitle>
                            <Card.Img src="assets/images/about/line.png" style={{ width: '4%' }} />
                            <Card.Title className="py-3" as="h3">
                                10 Reasons Why Your Business Need App
                            </Card.Title>
                            <Card.Text className="py-3">
                                Every business must invest in its business website and app development to increase visibility and ROI. Here are some reasons why having an app or website is essential for your business:
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className="my-2 p-2" data-aos="fade-right" data-aos-delay="200">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/01.svg" alt="One" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                A mobile app helps you reach customers where they spend the most time - on their smartphones.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-left" data-aos-delay="400">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/02.svg" alt="two" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9} >
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                Having a mobile app increases brand recognition and awareness among your target audience.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2 " data-aos="fade-right" data-aos-delay="600">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/03.svg" alt="03" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                A mobile app can enhance customer engagement by providing a personalized experience through features such as push notifications and in-app messaging.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-left" data-aos-delay="800">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/04.svg" alt="04" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                Mobile apps offer greater convenience to customers by allowing them to easily access your products or services at any time and from anywhere.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-right" data-aos-delay="1000">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/05.svg" alt="05" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                Mobile apps can help you gather valuable customer data and insights, which can be used to improve your marketing strategies and product offerings.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-left" data-aos-delay="1200">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/06.svg" alt="06" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                By offering a mobile app, you can differentiate your business from competitors and improve your overall reputation and credibility.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-right" data-aos-delay="1400">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/07.svg" alt="07" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                Mobile apps provide an additional channel for customer support and feedback, allowing you to address any issues or concerns in a timely manner.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-left" data-aos-delay="1600">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/08.svg" alt="08" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                A mobile app can increase customer loyalty by offering exclusive discounts and promotions through in-app features such as loyalty programs.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-right" data-aos-delay="1800">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/09.svg" alt="09" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                Mobile apps can streamline your business operations by automating appointment scheduling and order management processes.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-2 p-2" data-aos="fade-left" data-aos-delay="2000">
                    <Col md={2} sm={3}>
                        <Row className="pt-2">
                            <Col md={4} className="pt-1">
                                <Image src="assets\images\svg\grayLine.svg" alt="grayLine" />
                            </Col>
                            <Col md={4}>
                                <Image src="assets/images/svg/10.svg" alt="10" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} sm={9}>
                        <Card border="warning" className="p-2">
                            <Card.Text className="px-3">
                                A mobile app can help you stay ahead of the curve and adapt to changing customer preferences and technological advancements.
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Whyapplication;