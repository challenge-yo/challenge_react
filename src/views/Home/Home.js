import React, { Component } from 'react'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'

class Home extends Component {
    render() {
        return(
            <div>
                <GlobalFooter />
                <GlobalHeader />
            </div>
        )
    }
}

export default Home