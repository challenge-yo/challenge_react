import React, { Component } from 'react'
import axios from 'axios'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'
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
    }
    getSpecificChallenge(id){
        axios.get(`http://localhost:3000/api/specificChallenge/${id}`).then(response => {
          this.setState({challenges: response.data})
        })
      }
    render() {
        const challenge = this.state.challenges.map((challenge, i) => {
            return  <FeaturedCard key={i} name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description} /> 
          })
        return(
            <div>
                <GlobalHeader />
                Featured
                {challenge}
                <GlobalFooter />
            </div>
        )
    }
}

export default Featured