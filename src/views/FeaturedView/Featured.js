import React, { Component } from 'react'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'

class Featured extends Component {
    render() {
        return(
            <div>
                <GlobalHeader />
                <GlobalFooter />
            </div>
        )
    }
}

export default Featured