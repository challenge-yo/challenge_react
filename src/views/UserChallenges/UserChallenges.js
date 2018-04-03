import React, { Component } from 'react'
import UserChallengesCard from '../../components/UserChallengesCard/UserChallengesCard'
import axios from 'axios'
import {List} from 'material-ui/List';


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            currentChallenges:[]
        }
    }
    componentDidMount() {
        //// server
        // app.get('/api/userChallenges', function(req, res) {
        //     app.get('db').get_user_challenges([req.session.user.id]).then(response => {
        //         res.status(200).send(response)
        //     })
        // })
        axios.get('/api/userChallenges').then(res => {
            console.log('resp:', res.data)
            this.setState({ currentChallenges: res.data })
        })
    }
    render() {
        const listItems = this.state.currentChallenges.map((x, i)=>{return(
            <UserChallengesCard key={i} challenge={x} />
        )})
        return (
            <div>
                <List>
                    {listItems}
                </List>
            </div>
        )
    }
}

export default Profile