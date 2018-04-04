import React, { Component } from 'react'
import axios from 'axios'

import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'


class Featured extends Component {
    constructor(){
        super()
        
        this.state = {
            challenges: []
        }
    }
    componentDidMount(){
        this.getSpecificChallenge()
        console.log(this.props.match.params.id)
    }
    getSpecificChallenge(){
        const id = this.props.match.params.id
        axios.get(`/api/specificChallenge/${id}`).then(response => {
          this.setState({challenges: response.data})
        })
      }
    render() {
        const challenge = this.state.challenges.map((challenge, i) => {
            return  <FeaturedCard key={i} image={ challenge.image } name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description} id={challenge.id} /> 
          })
        return(
            <div>
                {challenge}
            </div>
        )
    }
}

export default Featured