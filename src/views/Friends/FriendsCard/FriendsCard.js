import React, { Component } from 'react';
import axios from 'axios';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class FriendsCard extends Component {

    render() {
        return (


            <div>
                <List>
                    <ListItem
                        primaryText={this.props.friend}
                        leftAvatar={<Avatar src={this.props.icon} />}
                        rightIcon={<CommunicationChatBubble />}>
                        { this.props.status === 'friends' ? <div> 
                        <button onClick={() => this.props.addFriend( this.props.id )}>Add Friend</button></div>
                        : this.props.status === 'confirm' ? <div>
                        <button onClick={() => this.props.confirmFriend( this.props.id )}>Confirm Friend</button>
                        <button onClick={() => this.props.declineFriend( this.props.id )}>Decline Friend</button> 
                        </div> : <div><button onClick={() => this.props.removeFriend( this.props.id )}>Remove Friend</button></div> }
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default FriendsCard;