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
            console.log( 'Added...kind of ')
            return this.props.getFriends
        })
    }

    confirmFriend() {
        axios.put(`http://localhost:3000/api/confirmfriend`, {
            id: this.props.id
        }).then(res => {
            this.props.confirmFriend
            this.props.verified
        })
    }

    declineFriend() {
        axios.put(`http://localhost:3000/api/declinefriend`, {
            id: this.props.id
        }).then(res => {
            this.props.confirmFriend
        })
    }

    removeFriend() {
        axios.delete(`http://localhost:3000/api/deletefriend`, {
            id: this.props.id 
        }).then(res => {
            this.props.verified
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