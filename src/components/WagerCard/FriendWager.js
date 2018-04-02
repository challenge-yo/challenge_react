import React, { Component } from 'react';
import axios from 'axios';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear'

class FriendsCard extends Component {

    render() {

        const button = <RaisedButton secondardy={true} label='Validator' onClick={() => this.setState({} )} /> 

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