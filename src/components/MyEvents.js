import React, { Component } from 'react'
import MyEvent from './MyEvent'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class MyEvents extends Component {
   state = {
  	title: "",
    location: "",
    date: "",
    headcount: 0,
    time: "",
    allEvents: []
  }

  

  handleFormSubmit = (e) => {
  	e.preventDefault()
    
    console.log(this.state.title)
    fetch(`http://localhost:3005/events`, { //eslint-disable-line 
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "title": this.state.title,
        "location": this.state.location,
        "date": this.state.date,
        "headcount": this.state.headcount,
        "time" :this.state.time,
        "user_id": 1
      })
    }).then(response => response.json())
    .then(data => this.setState({
        allEvents: [data,...this.state.allEvents],
        title: "",
        location: "",
        date: "",
        headcount: 0,
        time: ""
    }))
  }

  componentDidMount() {
    fetch(`http://localhost:3005/events`) //eslint-disable-line
      .then(response => response.json())
      .then(data => this.setState({
          allEvents: data
      }))
  }
 
 handleDelete = (data) =>{
   console.log(data.id)
   fetch(`http://localhost:3005/events/${data.id}`, { //eslint-disable-line 
            method: 'DELETE',
            headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(response => response.json())
    .then((part) => {
        const filtered  = this.state.allEvents.filter((element)=>element.id !== part.id)
        this.setState({
          allEvents: filtered
        })

    }) 
 }


  render() {
      const unfiltered = [...this.state.allEvents]
      const filtered = unfiltered.filter(element => element.user.name === "Yuriy")

    return (
       
      <div  style={{width: "80%"}}>
        
    	{/* <h1>Create a new sport event</h1>
    	<form id="create-course-form" onSubmit={(e) => this.handleFormSubmit(e)}>
		  	<input onChange={(event)=>this.setState({title:event.target.value})} type="text" name="title" value={this.state.title} placeholder="title" />
		  	<input onChange={(event)=>this.setState({location:event.target.value})}type="text" name="location" placeholder="location" value={this.state.location} />
		  	<input onChange={(event)=>this.setState({date:event.target.value})}  type="date" name="date" placeholder="date" value={this.state.date} />
        <input onChange={(event)=>this.setState({headcount:event.target.value})}  type="text" name="headcount" placeholder="headcount" value={this.state.headcount} />
        <input onChange={(event)=>this.setState({time:event.target.value})}  type="time" name="time" placeholder="time" value={this.state.time} />
	  	<input type="submit" />
	  </form> */}
    {/* <center> */}
   <div style={{marginLeft: "20%"}}>
    <h1>Create your own event!</h1>
    <Form onSubmit={(e) => this.handleFormSubmit(e)}>
   <Form.Group controlId="formGroupEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control onChange={(event)=>this.setState({title:event.target.value})} type="text" name="title" value={this.state.title} placeholder="title"/>
  </Form.Group>
  <Form.Group controlId="formGroupLocation">
    <Form.Label>Location</Form.Label>
    <Form.Control onChange={(event)=>this.setState({location:event.target.value})}type="text" name="location" placeholder="location" value={this.state.location}/>
  </Form.Group>
  <Form.Group controlId="formGroupDate">
    <Form.Label>Date</Form.Label>
    <Form.Control onChange={(event)=>this.setState({date:event.target.value})}  type="date" name="date" placeholder="date" value={this.state.date} />
  </Form.Group>
  <Form.Group controlId="formGroupHeadCount">
    <Form.Label>HeadCount</Form.Label>
    <Form.Control onChange={(event)=>this.setState({headcount:event.target.value})}  type="text" name="headcount" placeholder="headcount" value={this.state.headcount}/>
  </Form.Group>
  <Form.Group controlId="formGroupTime">
    <Form.Label>Time</Form.Label>
    <Form.Control onChange={(event)=>this.setState({time:event.target.value})}  type="time" name="time" placeholder="time" value={this.state.time}/>
  </Form.Group>
   <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</div>

      <div>
          <div className= "event-container">
          {filtered.map(event=> <MyEvent key= {event.id} handleDelete = {this.handleDelete} event = {event}/>)}
          </div>
      </div>
      </div>

    );
  }
}

{/* <input placeholder="First Name" type="text" value={this.state.firstname} onChange={(ev)=>this.setState({firstname:ev.target.value})}/>
<input placeholder="Last Name" type="text" value={this.state.lastname} onChange={(ev)=>this.setState({lastname:ev.target.value})}/> */}