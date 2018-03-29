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
        console.log(this.props.match.params.Category)
    }
    categorizeChallenges(){
        let categoryName = this.props.match.params.Category
        axios.get(`http://localhost:3000/api/challengeByCategory/${categoryName}`).then(response => {
            this.setState({challenges: response.data})
    })}

    render() {
        const challenges =  this.state.challenges.map((challenge, i) => {
            return <Link style={{textDecoration: 'none'}} key={i} to={`/challenge/${challenge.id}`}><ChallengeCard name={challenge.challenge_name} categoryname={challenge.category} difficulty={challenge.difficulty}
            time={challenge.due_time} icon={challenge.badge} description={challenge.description} /></Link>
        })
        return(
            <div>
                {challenges}
            </div>
        )
    }
}
export default Challenges