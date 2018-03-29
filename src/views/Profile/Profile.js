import React, { Component } from 'react'
import UserCard from '../../components/UserCard/UserCard'
import axios from 'axios'

class Profile extends Component {
    constructor(){
        super()
        this.state={
            user: {}
        }
    }
    componentDidMount(){
        let userId = this.props.match.params.id
        axios.get('/api/users/'+userId).then(res => {
            this.setState({user: res.data})
        })
    }
    render() {
        return(
            <div>
                <UserCard user={this.state.user}/>
            </div>
        )
    }
}

export default Profile