import React from 'react'
import EventItem from '../components/EventItem';
import { Item } from 'semantic-ui-react'

// const BASE_USER_URL="http://localhost:3001/users/current-user"
const BASE_USER_URL="https://serene-headland-62664.herokuapp.com/users/current-user"

class UserShow extends React.Component{

        constructor(props){
            super(props)
            this.state ={
                user: null
            }
        }

    componentDidMount(){
        fetch(BASE_USER_URL, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`
                }
        })
        .then(r => r.json())
        .then(userObj => this.setState({user: userObj}))
    
    }

    removeEventFromUser = (eventObj) =>{

        const data ={ user: { event: eventObj, removeEvent: true} }
        
        fetch(BASE_USER_URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`
                },
            body: JSON.stringify(data)
        })
        .then(r => r.json())
        .then(userObj => this.setState({user: userObj}))
    }
    

 

        render(){
           if(this.state.user){
            return (
                <Item.Group relaxed className="user-event-list">
                        {this.state.user.events.map(event => <EventItem key={event.id} eventItem={event} removeEventFromUser={this.removeEventFromUser}/>)}
                </Item.Group>
            )
                
           }else{
               return <h1>Please log in to view your events</h1>
            }     
        }
    
    }
    
    
    export default UserShow