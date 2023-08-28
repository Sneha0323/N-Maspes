import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Services() {
    const Servi = [
        {
            "id": 1,
            "img": "assets/images/svg/salon.svg",
            "Title": "Salon Booking Solutions",
            "Des": " We help you develop salon booking apps to book appointments with their preferred stylists easily. We build app features like real-time availability, appointment reminders, and customer profiles to improve the customer experience."
        },
        {
            "id": 2,
            "img": "assets/images/svg/carWash.svg",
            "Title": "Car Wash Booking App & Accounting Backend",
            "Des": "We assist you in getting car wash booking apps that provide a seamless booking experience to your customers. We create an accounting backend that offers an easy-to-use solution for tracking expenses, revenue, and profits."
        },
        {
            "id": 3,
            "img": "assets/images/svg/portfolio.svg",
            "Title": "Company Portfolio Website",
            "Des": " A company portfolio website is essential for showcasing your business and brand. Our team of experts will help design a website that reflects your company's unique value proposition, goals, and services."
        },
        {
            "id": 4,
            "img": "assets/images/svg/service.svg",
            "Title": "Service Booking App",
            "Des": " Our service booking app provides businesses with a platform to offer a wide range of services, including cleaning, handyman, and pet care. The app streamlines the booking process, making it easy for customers to find and book the services they need."
        },
        {
            "id": 5,
            "img": "assets/images/svg/ecomm.svg",
            "Title": "All Types Of E-Commerce",
            "Des": "Our e-commerce platform provides businesses with a powerful solution for selling their products online. We’ll help you develop features like shopping carts, payment methods, and inventory management functionalities."
        },
        {
            "id": 6,
            "img": "assets/images/svg/wordpress.svg",
            "Title": "WordPress Websites",
            "Des": "We specialize in creating WordPress websites that are fully responsive and optimized for search engines. Our team will design professional websites that reflect your brand and engages your target audience."
        },
        {
            "id": 7,
            "img": "assets/images/svg/realtime.svg",
            "Title": "Realtime Messaging Solutions",
            "Des": "Our real-time messaging solutions enable businesses to engage with customers in real time. Our messaging solutions are built with the aim of improving customer service and satisfaction."
        },
        {
            "id": 8,
            "img": "assets/images/svg/onlineApplication.svg",
            "Title": "Account Desktop & Online Applications",
            "Des": " Our account desktop and online applications provide businesses with an easy-to-use solution for managing their accounts, including invoicing, billing, and payment processing."
        },
        {
            "id": 9,
            "img": "assets/images/svg/socialMedia.svg",
            "Title": "Social Media Apps",
            "Des": "Our social media apps provide businesses with a powerful platform for engaging with customers on social media. The apps include features such as social media integration, real-time analytics, and customer engagement tools."
        }
    ]
    return (
        <>
            <Container className="my-3 p-3 services" id="Services">
                <Card border="light">
                    <Card.Img src='assets\images\shape\serviceBg.png' alt="banner bg" style={{}} />
                    <Card.ImgOverlay>
                        <Row >
                            <Col md={6} sm={12} data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <Image src="assets/images/feature/service.png" />
                            </Col>
                            <Col md={6} sm={12}>
                                <Card className="p-5" bg="transparent" border="light">
                                    <Card.Subtitle className="py-2" style={{ color: '#539E83' }}>
                                        Our Services
                                    </Card.Subtitle>
                                    <Card.Img src="assets/images/about/line.png" style={{ width: '5%' }} />
                                    <Card.Title as="h2" className="mt-3">
                                        On-Demand App & Website Development Services
                                    </Card.Title>
                                    <Card.Text className="mt-3" >
                                        Our team helps people who want to become entrepreneurs and run businesses. Our on-demand app and website development services are designed to provide businesses with cutting-edge solutions. We specialize in a range of solutions, including
                                    </Card.Text>
                                </Card>
                            </Col>
                        </Row>
                        <Container className="my-md-4">
                            <Row className="g-4 justify-content-around">
                                {Servi.map((ele) => {
                                    return (
                                        <Col md={4} sm={6}>
                                            <Card border="light" className="m-1 px-2" data-aos="fade-up" data-aos-delay="200">
                                                <Row className="py-3 mt-2">
                                                    <Col md={4} sm={5}>
                                                        <Card.Img variant="top" src={ele.img} /></Col>
                                                    <Col md={8} sm={7} className="py-3 f-18" >
                                                        <Card.Title as="h5">{ele.Title}</Card.Title>
                                                    </Col>
                                                </Row>
                                                <Card.Text className="p-2 pb-4">
                                                    {ele.Des}
                                                </Card.Text>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Container>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </>
    )

}

export default Services;