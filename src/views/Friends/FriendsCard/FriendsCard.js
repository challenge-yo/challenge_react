import React, { Component } from 'react';
import axios from 'axios';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear'

class FriendsCard extends Component {

    render() {

        const button = this.props.status === 'friends' ? <RaisedButton onClick={() => this.props.addFriend( this.props.id )} secondary={true} label='Add Friend' /> : this.props.status === 'confirm' ? <RaisedButton onClick={() => this.props.confirmFriend( this.props.id )} secondary={true} label='Confirm' /> : <RaisedButton onClick={() => this.props.removeFriend( this.props.id )} secondary={true} label='Remove' />


        return (
            <div>
                <List>
                    <ListItem primaryText={ this.props.friend} leftAvatar={<Avatar src={ this.props.icon } />} rightIconButton={ button } />
                </List>
            </div>
        )
    }
}

export default FriendsCard;