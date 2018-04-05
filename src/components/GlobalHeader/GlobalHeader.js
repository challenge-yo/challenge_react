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
                        <ListItem onClick={ () => this.handleToggle() } href='/#/home' primaryText='Home' />
                        <ListItem onClick={ () => this.handleToggle() } href='/#/friends' primaryText='Friends' />
                        <ListItem onClick={ () => this.handleToggle() } href='/#/categories' primaryText='Categories' />
                        <Divider />
                        <ListItem href='/logout' primaryText='Logout' />
                    </List>
                </Drawer>
            </AppBar>
        )
    }
}

export default GlobalHeader