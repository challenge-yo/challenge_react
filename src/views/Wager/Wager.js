import React, { Component } from 'react'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'
import WagerCard from '../../components/WagerCard/WagerCard'
import axios from 'axios'

class Wager extends Component {
    constructor(){
        super()
        this.state={
            challenge:{}
        }
    }
    componentDidMount(){
        let challengId= this.props.match.params.id
        axios.get('/api/wager/'+challengId).then(res => {
            this.setState({challenge:res.data[0]})
        })
    }

    render() {
        return(
            <div>
                <GlobalHeader />
                <WagerCard challenge={this.state.challenge}/>
                {/* <button onClick={()=>console.log(this.state)}>test</button> */}
                <GlobalFooter />
            </div>
        )
    }
}

export default Wager