import React, { Component } from 'react'
import UserCard from '../../components/UserCard/UserCard'
import axios from 'axios'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                buisness: 0,
                education: 0,
                family: 0,
                finance: 0,
                first_name: "",
                health: 0,
                id: 0,
                image: "",
                last_name: "",
                social: 0,
                spiritual: 0,
                user_name: "",
                score:0
            }
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.id
        axios.get('/api/users/' + userId).then(res => {
            console.log(res.data)
            this.setState({ user: res.data })
        })
    }
    render() {
        return (
            <div className='main-app-wrapper'>
                <UserCard user={this.state.user} />
            </div>
        )
    }
}

export default Profile