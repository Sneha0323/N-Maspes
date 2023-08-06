import React from "react";
import { Container, NavItem, NavLink, Row, Tab, Col, Nav, Image, Button, Card} from "react-bootstrap"

const Applicationlink = () => {
return(
    <>
    <Container className="p-3">
        <Tab.Container id="left-tabs-example" defaultActiveKey={1} >
            <Row className="justify-content-md-center position-relative">
                <Col sm={3}>
                    <Nav variant="tabs"  className="flex-column">
                        <NavItem className="p-3" as="h5">
                            <NavLink eventKey={1}>Easy Order Flow</NavLink>
                        </NavItem>
                        <NavItem className="p-3"as="h5">
                            <NavLink eventKey={2}>Adding Dishes To Favorite</NavLink>
                        </NavItem>
                        <NavItem className="p-3 "as="h5">
                            <NavLink eventKey={3}>Additional Options Functionality</NavLink>
                        </NavItem>
                        <NavItem className="p-3"as="h5">
                            <NavLink eventKey={4}>Coupon Code For Offers</NavLink>
                        </NavItem>
                        <NavItem className="p-3"as="h5">
                            <NavLink eventKey={5}>Table Bookings</NavLink>
                        </NavItem>
                        <NavItem className="p-3"as="h5">
                            <NavLink eventKey={6}>Real-Time Order Notifications</NavLink>
                        </NavItem>
                        <NavItem className="p-3"as="h5">
                            <NavLink eventKey={7}>In Request Invoice</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey={1}>
                            <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/feature.8629c17b38ad86c020e2d2bd33e98d9d.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>Easy Order Flow</h4>
                                <p>We streamline the order flow for customers with a user-friendly interface. We make it easy for customers to browse menu options, customize orders, and checkout quickly.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={2}>
                        <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/addingDish.8149c9758433f3498d3060ac8aec8371.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>Adding Dishes To Favorites</h4>
                                <p>We develop quality apps with features to allow customers to save their favorite dishes for quick and easy re-ordering. We create a more personalized customer experience.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={3}>
                        <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/AddOptFun.ab92e5deaa46a1733ea0b26ebb229f74.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>Additional Options Functionality</h4>
                                <p>We’ll build apps that offer customers the ability to customize their orders with additional options, such as adding extra toppings or selecting the level of spiciness.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={4}>
                        <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/CouponCode.ea06c2fcbcfb1f4e24dfad0ca736dc70.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>Coupon Code For Offers</h4>
                                <p>We help you boost repeat business and attract new customers by offering special promotions and discount offers through coupon codes on various occasions.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={5}>
                        <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/TableBookings.428517f463acdb668eaf9b187c983068.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>Table Bookings</h4>
                                <p>We help you allow customers to reserve tables at your restaurant tables through the app, making it easier for them to plan their visit and avoid waiting in line.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={6}>
                        <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/Real-Time.a8269de7da212dbc788d096a0d22b3f6.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>Real-Time Order Notifications</h4>
                                <p>Keep your customers informed of their food delivery order status with real-time updates and notifications, ensuring a seamless and transparent experience. Besides, you can send personalized notifications to users with various offers, discounts, and relevant information. It will help you in engaging better and generate more profit.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey={7}>
                        <Row className=" mt-2">
                            <Col md={6} sm={12} className="p-1">
                                <Image src="https://maspes.io/static/media/ReqInvoice.a3128a4acfe8b5153f32ad94d6bd02fd.svg"/>
                            </Col>
                            <Col md={6} sm={12} className="p-5">
                                <h4>In Request Invoice</h4>
                                <p>Provide your customers with an option to request an invoice for their orders, improving transparency and accountability for both the restaurant and the customer.</p>
                                <Button variant="success">Know More</Button>
                            </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
    </>
)


}
export default Applicationlink