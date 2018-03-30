import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider'

class GlobalHeader extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return(
            <AppBar onLeftIconButtonClick={ () => this.handleToggle() }>
                <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
                    <List>
                        <ListItem primaryText='Home' />
                        <ListItem primaryText='Friends' />
                        <ListItem primaryText='Challenges' />
                        <Divider />
                        <ListItem primaryText='Logout' href='http://localhost:3005/logout'/>
                    </List>
                </Drawer>
            </AppBar>
        )
    }
}

export default GlobalHeader