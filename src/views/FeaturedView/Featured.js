import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import FeaturedCard from '../../components/FeaturedCard/FeaturedCard'
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import FontIcon from 'material-ui/FontIcon';

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
                {challenge}
                <div>
                <Link to='/wager'><RaisedButton
                    onClick={this.props.button}
                    label='Accept Challenge'
                    icon={<Add/>}
                /></Link>
                </div>
            </div>
        )
    }
}

export default Featured