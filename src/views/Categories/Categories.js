import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'

class Categories extends Component {
    constructor(){
        super()

        this.state = {
            challenges: []
        }
    }
    componentDidMount(){
        this.categorizeChallenges()
    }
    categorizeChallenges(category){
        axios.get(`http://localhost:3000/api/challengeByCategory/${category}`).then(response => {
            this.setState({challenges: response.data})
    })}
    render() {
        const challenges =  this.state.challenges.map((challenge, i) => {
            return <ChallengeCard key={i} name={challenge.challenge_name} category={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description}/> 
        })
        return(
            <div>
                <GlobalHeader />
                Challenges
                <Link to={'/featured'}>Featured</Link>
                {challenges}
                <GlobalFooter />
            </div>
        )
    }
}

export default Categories