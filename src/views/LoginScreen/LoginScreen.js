import React, { Component } from 'react'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'


class LoginScreen extends Component {

    componentDidMount() {
        axios.get('/auth/me')
        .then( resp => {
            if (resp.data !== 'Not logged in!') {
                this.props.history.push('/home')
            }
        })
        .catch( err => {
            console.error( err )
        })
    }


    render() {
        return(
            <div className='login-page-main-div'>
                <RaisedButton backgroundColor='black' buttonStyle={{ color: 'white', fontSize: '2.5rem', width: '175px', height: '75px', position: 'fixed', bottom: 0, right: 0 }} className='login-page-main-button' id='login-button' href={ process.env.REACT_APP_LOGIN }>LOGIN</RaisedButton>
            </div>
        )
    }
}

export default LoginScreen