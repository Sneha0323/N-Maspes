import React from "react";
import { Container, Row, Col, Image, Card, CardGroup } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

function Services() {
    return (
        <>
            <Container className="p-3">
                <Row>
                    <Col md={6}>
                        <Image src="https://maspes.io/assets/images/feature/service.png" />
                    </Col>
                    <Col md={6}>
                        <Card className="p-5" border="light">
                            <Card.Subtitle>
                                Our Services
                            </Card.Subtitle>
                            <Card.Title as="h2" className="mt-3">
                                On-Demand App & Website Development Services
                            </Card.Title>
                            <Card.Text className="mt-3" >
                                Our team helps people who want to become entrepreneurs and run businesses. Our on-demand app and website development services are designed to provide businesses with cutting-edge solutions. We specialize in a range of solutions, including
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container className="p-3">
                <Row xs={1} md={3} className="g-5">
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/salon.a7faf726e37331e71b06868933cca5cc.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Salon Booking Solutions</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            We help you develop salon booking apps to book appointments with their preferred stylists easily. We build app features like real-time availability, appointment reminders, and customer profiles to improve the customer experience.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="../src/assets/svg/carWash.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Car Wash Booking App & Accounting Backend</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            We assist you in getting car wash booking apps that provide a seamless booking experience to your customers. We create an accounting backend that offers an easy-to-use solution for tracking expenses, revenue, and profits.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/portfolio.cd87b795bcf5a082ee9518c496a6fc91.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Company Portfolio Website</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            A company portfolio website is essential for showcasing your business and brand. Our team of experts will help design a website that reflects your company's unique value proposition, goals, and services.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/service.66ce070d4a70f60038153a9d350738ce.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Service Booking App</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            Our service booking app provides businesses with a platform to offer a wide range of services, including cleaning, handyman, and pet care. The app streamlines the booking process, making it easy for customers to find and book the services they need.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/ecomm.0a023bcebc6896da7cc8ab83d6fb3741.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">All Types Of E-Commerce</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            Our e-commerce platform provides businesses with a powerful solution for selling their products online. We’ll help you develop features like shopping carts, payment methods, and inventory management functionalities.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/wordpress.d37f5533742cbbb8127c03624971aa15.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">WordPress Websites</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            We specialize in creating WordPress websites that are fully responsive and optimized for search engines. Our team will design professional websites that reflect your brand and engages your target audience.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/realtime.580f5a21823a20d90969b17b72dd6244.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Realtime Messaging Solutions</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            Our real-time messaging solutions enable businesses to engage with customers in real time. Our messaging solutions are built with the aim of improving customer service and satisfaction.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/onlineApplication.dfc99be4eb30a987999b768cb8206871.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Account Desktop & Online Applications</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            Our account desktop and online applications provide businesses with an easy-to-use solution for managing their accounts, including invoicing, billing, and payment processing.
                        </Card.Text>
                    </Card>
                    <Card border="light" className="px-4">
                        <Row className="p-3">
                            <Col md={4} className="mt-2">
                                <Card.Img variant="top" src="https://maspes.io/static/media/socialMedia.5932452fd714ef24aa8f8e5b1badb25c.svg" /></Col>
                            <Col md={8} className="p-3 mt-2">
                                <Card.Title as="h5">Social Media Apps</Card.Title>
                            </Col>
                        </Row>
                        <Card.Text className="p-2 mb-0">
                            Our social media apps provide businesses with a powerful platform for engaging with customers on social media. The apps include features such as social media integration, real-time analytics, and customer engagement tools
                        </Card.Text>
                    </Card>
</Row>
            </Container>
            <Row xs={1} md={4} className="g-5">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )

}

export default Services;