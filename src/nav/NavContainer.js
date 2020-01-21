import React, { Component } from 'react'

import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Link} from  "react-router-dom";
import {Button} from 'react-bootstrap';
export default class NavContainer extends Component {
    render() {
        return (
           
            <Navbar bg="dark" variant="dark" style={{height:'4rem', justifyContent: "space-around"}}>
                   <Link  to="/"><strong><h1>Sport Event</h1></strong></Link>
                    <Nav class="nav-sport" >
                        <Button style={{marginLeft: "900px"}} variant="outline-primary">
                            <Link class="link-sport-nav" to="events">All events</Link>
                        </Button>
                        
                        <Button variant="outline-primary">
                        <Link class="link-sport-nav"  to="my-events">My events</Link>
                        </Button>

                        <Button variant="outline-primary">
                        <Link class="link-sport-nav" to="participation">Participation</Link>
                        </Button>
                    </Nav>
            </Navbar>
        
        )
    }
}
