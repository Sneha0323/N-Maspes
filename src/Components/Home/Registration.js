import React from "react";
import { Container, Row , Col, Card, Form} from "react-bootstrap";

let Register = () => {
    return(
        <>
        <Container style={{background:"orange"}} >
            <Row>
                <Col xs={3}>
                    <Card.Header className="p-2">
                        <h4>Register Here</h4>
                        {/* <Card.Title>Register Here</Card.Title> */}
                        <Form>
                            <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="UserName"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="UserName"/>
                            </Form.Group>
                        </Form>
                    </Card.Header>
                </Col>
            </Row>
        </Container>        
        </>
    )
}
export default Register