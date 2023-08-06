import React, { useState } from "react";
import { Container, Row , Col, Card, Form, Button} from "react-bootstrap";

let Register = () => {

    let [state,setState]= useState({
        user : {
            username : '',
            email : '',
            password : ''
        }
    });

    let updateInput = (e) => {
        setState({
            ...state,
            user:{
                ...state.user,
            [e.target.name] : e.target.value
            }            
        })
    }

    let regist=(e)=>{
        e.preventDefault();
        console.log(state.user)
    };
    return(
        <>
         {/* <pre>{JSON.stringify(state)}</pre> */}
        <Container className="mt-3">
            <Row>
                <Col md={3}>
                    <Card className="shadow-lg p-4">
                        <Card.Header className="m-3 p-2" style={{backgroundColor:'orange',textAlign:'center'}}>
                            <h4>Register Here</h4>
                        </Card.Header>   
                        <Card.Body style={{backgroundColor:'#d1fff5'}}>
                            <Form>
                                <Form.Group className="mb-3">
                                <Form.Control 
                                name ="username"
                                onChange = {updateInput} 
                                type="text" placeholder="UserName"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control 
                                name ="email"
                                onChange = {updateInput} 
                                 type="email" placeholder="Email"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                <Form.Control 
                                name ="password"
                                onChange = {updateInput} 
                                type="password" placeholder="Password"/>
                                </Form.Group>
                                <Form.Group className="mb-3"style={{textAlign:'center'}}>
                                    <Button onClick={regist} variant="warning" type="submit">Register</Button>
                                </Form.Group>
                            </Form>
                        </Card.Body> 
                    </Card>
                </Col>
                {/* <Col md={3} style={{border: '2px solid black'}}>2</Col>
                <Col md={3} style={{border: '2px solid black'}}>3</Col> */}
            </Row>
        </Container>        
        </>
    )
}
export default Register