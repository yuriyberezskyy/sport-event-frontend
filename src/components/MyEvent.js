import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


export default class MyEvent extends Component {
    render() {
        return (
            
            <Card style={{ width: '18rem',marginLeft:'1rem', marginTop:'1rem'}}className='cards'>
             {/* <Card.Img variant="top" src='' /> */}
                <Card.Body >
                 <Card.Title><h4>{this.props.event.title}</h4></Card.Title>
                 <Card.Title>Location:  {this.props.event.location}</Card.Title>
                 <Card.Title>Date: {this.props.event.date}</Card.Title>
                 <Card.Title>Max people:{this.props.event.headcount}</Card.Title>
                 <Card.Title>Time:{this.props.event.time}</Card.Title>
                 <Card.Title>Created by:{this.props.event.user.name}</Card.Title>
                <Button onClick = {()=>this.props.handleDelete(this.props.event)} variant="danger">Delete</Button>
            </Card.Body>
            </Card>
            // <div>
            //     <div>
            //     <h3>{this.props.event.title}</h3>
            //     <h4>{this.props.event.location}</h4>
            //     <h4>{this.props.event.date}</h4>
            //     <h4>{this.props.event.headcount} </h4>
            //     <h4>{this.props.event.time}</h4>
            //     <h4>Created by: {this.props.event.user.name}</h4>
            //     <DangerButton onClick = {()=>this.props.handleDelete(this.props.event)}variant="danger">Delete</DangerButton>
            //     </div>
            // </div>
        )
    }
}
