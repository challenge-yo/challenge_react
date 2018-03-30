import React, { Component } from 'react'
import UserCard from '../../components/UserCard/UserCard'
import axios from 'axios'

class Friend extends Component {
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
                user_name: ""
            }
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.id
        console.log('user id', userId)
        axios.get('/api/users/' + userId).then(res => {
            this.setState({ user: res.data })
        })
    }
    render() {
        return (
            <div>
                <UserCard user={this.state.user} />
            </div>
        )
    }
}

export default Friend