import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'


class Challenges extends Component {
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
            return <Link to={`/challenge/${challenge.id}`}><ChallengeCard key={i} name={challenge.challenge_name} categoryname={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description} /></Link>
        })
        return(
            <div>
                Challenges
                <Link to={'/challenge/5'}>Featured</Link>
                {challenges}
            </div>
        )
    }
}
export default Challenges