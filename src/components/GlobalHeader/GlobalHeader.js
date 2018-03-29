import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'

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
                    
                </Drawer>
            </AppBar>
        )
    }
}

export default GlobalHeader