import React, { Component } from 'react'
import {Form,Col,Button} from 'react-bootstrap' 
export default class Signup extends Component {
    render() {
        return (
            <div>
                <Form style={{width:"50%",marginLeft:"400px"}}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridFullName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control placeholder="John Wick" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
