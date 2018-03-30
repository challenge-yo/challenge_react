import React, { Component } from 'react'
import axios from 'axios'
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'

class Home extends Component {
    constructor(){
        super()

        this.state = {
            featured: []
        }
    }
    componentDidMount(){
        this.randomChallenge()
    }
    randomChallenge(){
        axios.get('/api/random').then(response => {
            this.setState({featured: response.data})
        })
    }
    render() {
        const challenge = this.state.featured.map((challenge, i) => {
            return  <FeaturedCard key={i} name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description} id={challenge.id} /> 
        })
        return(
            <div>
                {challenge}
            </div>
        )
    }
}


export default Home