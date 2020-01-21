import React, { Component } from 'react'
import Participation from './Participation'

export default class AllParticipation extends Component {
    state = {
        participations:[],
        trueParticipation: [],
        objectToDelete: false
    }
     
    componentDidMount() {
    fetch(`http://localhost:3005/participations`) //eslint-disable-line
      .then(response => response.json())
      .then(data => this.setState({participations:data}))
    }
    
    
    onUnparticipateClick = (data) => {
        
           fetch(`http://localhost:3005/participations/${data.id}`, { //eslint-disable-line 
            method: 'DELETE',
            headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(response => response.json())
    .then((part) => {
        const deletedArr = this.state.participations.filter((element)=>element.id !== part.id )
        this.setState({
            participations: deletedArr
        })
    }) 
    }
    

    render() {
        let noParticipate = [...this.state.participations]
        let deletedParticipation = [...this.state.trueParticipation]
        
         let hasParticipated = noParticipate.filter( participation => participation.haveParticipated === true && participation !== deletedParticipation)

        return (
            <div>
                <h1>Your Participations</h1>
                <div className= "event-container">
                {hasParticipated.map(element=> <Participation onUnparticipateClick={this.onUnparticipateClick} key = {element.id} participation={element}/>)}
                </div>
            </div>
        )
    }
}

//      const stateCopy = [...this.state.bookShelf]
//   	const newState = stateCopy.filter(book => book.id !== bookObj.id)