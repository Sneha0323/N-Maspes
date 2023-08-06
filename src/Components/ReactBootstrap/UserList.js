import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserService } from "./UserService";

const UserList = () => {

    let [state, setState] = useState({
        users: []
    });

    useEffect(() => {
        UserService.getAllUsers().then((response) => {
            setState({
                ...state,
                users: response.data
            })
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <>
            {/* <pre>{JSON.stringify(state.users)}</pre> */}
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h3 className="text-primary">UserList</h3>
                        <p className="fst-italic">This is a Paragraph</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover responsive="md"  className="shadow-lg text-center">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>UserName</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.users.length> 0 &&
                                    state.users.map(user => {
                                        return (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.address.city}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.website}</td>
                                                <td>{user.company.name}</td>
                                            </tr>                                            
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )

}
export default UserList