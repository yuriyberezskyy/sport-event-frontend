import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class Event extends Component {

    state = {
        acceptEvent: false,
        participationID: 0,
        participationsArr: []
    } 
    
    // componentDidMount() {
    //     fetch('http://localhost:3005/participations') //eslint-disable-line
    //       .then(response => response.json())
    //       .then(data => this.setState({
    //            participationsArr: data
    //       }))
    // }

    
    handleClick =() =>{
        if (!this.state.acceptEvent) {
          fetch(`http://localhost:3005/participations`, { //eslint-disable-line 
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "haveParticipated": !this.state.acceptEvent,
        "user_id": 2,
        "event_id": this.props.event.id
      })
    }).then(response => response.json())
    .then((part) => {
         this.setState({
            acceptEvent: !this.state.acceptEvent,
            participationID: part.id
        })
    })
        }
    }
     
    
         
  
     

    render() {
       console.log(this.state.participationsArr)
        return (
            <div>
                <Card style={{ 
                    width: '18rem',marginLeft:'1rem', marginTop:'1rem'}} className="cards">
             {/* <Card.Img variant="top" src='' /> */}
             
                <Card.Body>
                 <Card.Title><h4>{this.props.event.title}</h4></Card.Title>
                 <Card.Title>Location:{this.props.event.location}</Card.Title>
                 <Card.Title>Date: {this.props.event.date}</Card.Title>
                 <Card.Title>Max people: {this.props.event.headcount}</Card.Title>
                 <Card.Title>Time: {this.props.event.time}</Card.Title>
                 <Card.Title>Created by: {this.props.event.user.name}</Card.Title>
                <Button onClick={this.handleClick} className="primary">Participate</Button>
            </Card.Body>
            </Card>
                {/* <div>
                <h3>{this.props.event.title}</h3>
                <h4>{this.props.event.location}</h4>
                <h4>{this.props.event.date}</h4>
                <h4>{this.props.event.headcount} </h4>
                <h4>Created by: {this.props.event.user.name}</h4>
                <Button onClick={this.handleClick} className="primary">Participate</Button>
                </div> */}
            </div>
        )
    }
}
