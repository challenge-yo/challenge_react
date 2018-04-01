import React, { Component } from 'react';
import axios from 'axios';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class FriendsCard extends Component {


    addFriend() {
        axios.post(`http://localhost:3000/api/addfriend`, {
            id: this.props.id
        }).then(res =>  {
            
        })
    }

    confirmFriend() {
        axios.put(`/api/confirmfriend`, {
            id: this.props.id
        }).then(res => {

        })
    }

    declineFriend() {
        axios.put(`/api/declinefriend`, {
            id: this.props.id
        }).then(res => {

        })
    }

    removeFriend() {
        axios.delete(`/api/deletefriend/${this.props.id}`)
        .then(res => {

        })
    }

    handleChange(){
        
    }

    render() {
        return (


            <div>
                <List>
                    <ListItem
                        primaryText={this.props.friend}
                        leftAvatar={<Avatar src={this.props.icon} />}
                        rightIcon={<CommunicationChatBubble />}>
                        { this.props.status === 'friends' ? <div> 
                        <button onClick={() => this.addFriend()}>Add Friend</button></div>
                        : this.props.status === 'confirm' ? <div>
                        <button onClick={() => this.confirmFriend()}>Confirm Friend</button>
                        <button onClick={() => this.declineFriend()}>Decline Friend</button> 
                        </div> : <div><button onClick={() => this.removeFriend()}>Remove Friend</button></div> }
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default FriendsCard;