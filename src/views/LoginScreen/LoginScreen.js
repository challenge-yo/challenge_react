import React, { Component } from 'react'
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton'

class LoginScreen extends Component {

    componentDidMount() {
        axios.get('http://localhost:3005/auth/me')
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
            <div>
                <a href='http://localhost:3005/auth'>Login</a>
            </div>
        )
    }
}

export default LoginScreen