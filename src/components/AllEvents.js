import React, { Component } from 'react'
import Event from './Event.js'
export default class AllEvents extends Component {

     state = {
        events: []
    }

    componentDidMount() {
       fetch(`http://localhost:3005/events`) //eslint-disable-line
         .then(response => response.json())
         .then(data=>this.setState({
             events: data
         }))
    }

    render()
     { console.log(this.state.events)
        return (
            <div>
                <h1>All Events</h1>
                <div className="event-container">
                
               {this.state.events.map(event => <Event key = {event.id} event = {event}/> )}
               </div>
            </div>
        )
    }
}
