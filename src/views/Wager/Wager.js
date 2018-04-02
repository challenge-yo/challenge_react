import React, { Component } from 'react'
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
                <WagerCard challenge={this.state.challenge}/>
                {/* <button onClick={()=>console.log(this.state)}>test</button> */}
            </div>
        )
    }
}

export default Wager