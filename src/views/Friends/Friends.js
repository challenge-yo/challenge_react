import React, { Component } from 'react'
import GlobalFooter from '../../components/GlobalFooter/GlobalFooter'
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader'
import axios from 'axios'
import FriendsCard from './FriendsCard/FriendsCard'
import Subheader from 'material-ui/Subheader';


class Friends extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            data2: [],
            data3: []

        }
    }


    componentDidMount() {
        this.getFriends()
        // this.confirmFriends()
        // this.actualFriends()
    }

    getFriends() {
        axios.get(`http://localhost:3000/api/friends`).then(res => {
            console.log('check here', res.data)
            this.setState({ data: res.data })
        })
    }

    confirmFriends() {
        axios.get(`http://localhost:3000/api/confirm`).then(res => {
            console.log('confirm', res.data)
            this.setState({ data2: res.data })
        })
    }

    actualFriends() {
        axios.get(`http://localhost:3000/api/verified`).then(res => {
            this.setState({ data3: res.data })
        })
    }

    render() {
        const friends = this.state.data.map((friend, i) => {
            return <FriendsCard key={i} friend={friend.user_name} icon={friend.image}  id={friend.facebook_id} status={'friends'} />
        })

        const confirm = this.state.data2.map((friend, i) => {
            return <FriendsCard key={i} friend={friend.user_name} icon={friend.image} id={friend.facebook_id} status={'confirm'} />
        })

        const actual = this.state.data3.map((friend, i) => {
            return <FriendsCard key={i} friend={friend.user_name} icon={friend.image} id={friend.facebook_id} status={'actual'}/>
        })
        return (
            <div>
                <GlobalHeader />
                <Subheader>Potential Friends</Subheader>
                {friends}
                <Subheader>Friend Requests</Subheader>
                {confirm}
                <Subheader>Confirmed Friends</Subheader>
                {actual}
                <GlobalFooter />
            </div>
        )
    }
}

export default Friends