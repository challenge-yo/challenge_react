import React, { Component } from 'react'
import axios from 'axios'
import FlatButton from 'material-ui/FlatButton'
import { AppBar, Paper, Card, CardText, Divider } from 'material-ui';


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
                <AppBar titleStyle={{ fontSize: '35px' }} showMenuIconButton={ false } style={{ backgroundColor: 'black', textAlign: 'center' }} title='AKRASIA' iconElementRight={ <FlatButton id='login-button' href={ process.env.REACT_APP_LOGIN }>LOGIN</FlatButton>} />


                <Paper style={{ width: '97vw', height: '80vh', margin: '20px', opacity: '.50', padding: '30px'}}>
                        <CardText style={{ fontSize: '40px' }}>Akrasia Definition</CardText>
                        <Divider />
                        <CardText style={{ fontSize: '26px' }}>
                        The state of mind in which someone acts against their better judgment through weakness of will.
                        </CardText>

                        <CardText style={{ fontSize: '40px' }}>Purpose</CardText>
                        <Divider />
                        <CardText style={{ fontSize: '26px' }}>
                        Sign up, find friends, choose challenges, better yourself.
                        </CardText>
                </Paper>

            </div>
        )
    }
}

export default LoginScreen