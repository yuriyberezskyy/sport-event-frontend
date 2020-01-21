import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
export default class Participation extends Component {
    
    state = {
        acceptEvent: true,

    }

    

    render() {
        return (
          
            <div>
                
                <div>
                <Card style={{ width: '18rem',marginLeft:'1rem', marginTop:'1rem'}} className="cards">
             {/* <Card.Img variant="top" src='' /> */}
                <Card.Body>
                 <Card.Title><h4>{this.props.participation.event.title}</h4></Card.Title>
                 <Card.Title>Location: {this.props.participation.event.location}</Card.Title>
                 <Card.Title>Date: {this.props.participation.event.date}</Card.Title>
                 <Card.Title>Max people:{this.props.participation.event.headcount}</Card.Title>
                 <Card.Title>Time:{this.props.participation.event.time}</Card.Title>
                 <Card.Title>Created by:{this.props.participation.event.user.name}</Card.Title>
                <Button onClick={()=>this.props.onUnparticipateClick(this.props.participation)} variant="danger">Unparticipate</Button>
            </Card.Body>
            </Card>
            </div>
                {/* <div>
                   <h3>{this.props.participation.event.title}</h3>
                   <h3>{this.props.participation.event.location}</h3>
                   <h3>{this.props.participation.event.date}</h3>
                   <h3>Who join event:{this.props.participation.user.name}</h3>
                 
                 <h3>Created by: {this.props.participation.event.user.name}</h3> 
                <Button onClick={()=>this.props.onUnparticipateClick(this.props.participation)} variant="danger">Unparticipate</Button>
                 <br/>
                </div> */}
            </div>
        )
    }
}
