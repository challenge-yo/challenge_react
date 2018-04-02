import React, { Component } from 'react'
import axios from 'axios'
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import { setInterval, setTimeout } from 'timers';

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
    reRunRandom(){
        setTimeout(this.randomChallenge(), 5000)
    }
    render() {
        const challenge = this.state.featured.map((challenge, i) => {
            return  <FeaturedCard key={i} name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description} id={challenge.id} /> 
        })
        return(
            <div>
                <div>
                    <h1>some fancy stuff about motivation or some stuff</h1>
                </div>
                <div>
                    <h2>Challenge App Name</h2>
                </div>
                {/* {challenge} */}
            </div>
        )
    }
}


export default Home