import React, { Component } from 'react'
import axios from 'axios'
import FriendsCard from './FriendsCard/FriendsCard'
import Subheader from 'material-ui/Subheader';


class Friends extends Component {

    constructor() {
        super()
        this.state = {
            potential_friends: [],
            confirm_needed: [],
            current_friends: []

        }

        this.addFriend = this.addFriend.bind( this )
        this.confirmFriend = this.confirmFriend.bind( this )
        this.declineFriend = this.declineFriend.bind( this )
        this.removeFriend = this.removeFriend.bind( this )
    }

    componentDidMount() {
        this.getFriends()
        this.confirmFriends()
        this.actualFriends()
    }

    getFriends() {
        axios.get(`/api/friends`).then(res => {
            this.setState({ potential_friends: res.data })
        })
    }

    confirmFriends() {
        axios.get(`/api/confirm`).then(res => {
            this.setState({ confirm_needed: res.data })
        })
    }

    actualFriends() {
        axios.get(`/api/verified`).then(res => {
            this.setState({ current_friends: res.data })
        })
    }

    // Actions ( Click Functions ) are passed down as props to the child component

    addFriend(id) {
        axios.post(`/api/addfriend`, {
            id,
        }).then(res =>  {
            this.getFriends()
        })
    }

    confirmFriend(id) {
        axios.put(`/api/confirmfriend`, {
            id,
        }).then(res => {
            this.confirmFriends()
            this.actualFriends()
        })
    }

    declineFriend(id) {
        axios.put(`/api/declinefriend`, {
            id,
        }).then(res => {
            this.confirmFriends()
        })
    }

    removeFriend(id) {
        axios.delete(`/api/deletefriend/${id}`)
        .then(res => {
            this.actualFriends()
            this.getFriends()
        })
    }


    render() {
        const potential_friends = this.state.potential_friends.map((friend, i) => {
            return <FriendsCard key={i} friend={friend.user_name} icon={friend.image}  id={friend.facebook_id} status={'friends'} score={friend.score} addFriend={ this.addFriend } removeFriend={ this.removeFriend } confirmFriend={ this.confirmFriend } declineFriend={ this.declineFriend }/>
        })

        const confirm_needed = this.state.confirm_needed.map((friend, i) => {
            return <FriendsCard key={i} friend={friend.user_name} icon={friend.image} id={friend.facebook_id} status={'confirm'} score={friend.score} addFriend={ this.addFriend } removeFriend={ this.removeFriend } confirmFriend={ this.confirmFriend } declineFriend={ this.declineFriend }/>
        })

        const actual_friends = this.state.current_friends.map((friend, i) => {
            return <FriendsCard key={i} friend={friend.user_name} icon={friend.image} id={friend.facebook_id} status={'actual'} 
             score={friend.score} addFriend={ this.addFriend } removeFriend={ this.removeFriend } confirmFriend={ this.confirmFriend } declineFriend={ this.declineFriend }/>
        })
        return (
            <div>
                <Subheader>Potential Friends</Subheader>
                { potential_friends }
                <Subheader>Friend Requests</Subheader>
                { confirm_needed }
                <Subheader>Confirmed Friends</Subheader>
                { actual_friends }
            </div>
        )
    }
}

export default Friends
