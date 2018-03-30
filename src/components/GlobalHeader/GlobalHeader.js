import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import axios from 'axios'

class GlobalHeader extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleLogout = () =>{axios.get('/logout')}

    render() {
        return(
            <AppBar onLeftIconButtonClick={ () => this.handleToggle() }>
                <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>

                    
                </Drawer>
                <button onClick={()=>this.handleLogout()}>Logout</button>
            </AppBar>
        )
    }
}

export default GlobalHeader