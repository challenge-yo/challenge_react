import React, { Component } from 'react'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'
import WagerCard from '../../components/WagerCard/WagerCard'

class Wager extends Component {
    render() {
        return(
            <div>
                <GlobalHeader />
                <WagerCard />
                <GlobalFooter />
            </div>
        )
    }
}

export default Wager