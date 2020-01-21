import React, { Component } from 'react'
import {Form,Button} from 'react-bootstrap'
import {Link} from  "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to our Sport event web</h1>
                <h3>Sing in</h3>
                <div>
                <Form style={{width: "50%",marginLeft:"400px"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                     </Button>
                     <Link to="/signup">Sign up</Link>
                </Form>
                </div>

            </div>
        )
    }
}
