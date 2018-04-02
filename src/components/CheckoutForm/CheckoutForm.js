import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import styling from './checkout.css'
import {List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { withRouter } from 'react-router-dom'


class CheckoutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            amount: 0,
            suggested: 0,
            average: 0,
            isDisabled: true,
            green:false,
            userChallenge:{ 
                        challenge_id: 0,
                        user_id: 0,
                        validator_id: 0,
                        start_time:0,
                        end_time:0, 
                        user_wager:0,
                        is_validated:false
                     }
        }
        this.handleAmount = this.handleAmount.bind(this)
        this.actualFriends = this.actualFriends.bind(this)
    }

    handleAmount(e) {
        this.setState({ amount: e.target.value })
        console.log(this.state.amount)
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.stripe.createToken({ name: 'Clyde' }).then(({ token }) => {
            console.log('CF token:', token);
            axios.post('/api/payment', { token, amount: this.state.amount }).then(resp => {
                console.log("RESP", resp)
            })
        });
    }
    componentDidMount() {
        this.actualFriends()
    }
    handleClick(friend){
    this.setState({isDisabled:false, userChallenge:{
        challenge_id:this.props.match.params.id,
        validator_id: friend.id,
        user_wager: this.state.amount,
        is_validated:false},
        green:true
     })
    

    }

    actualFriends() {
        axios.get(`/api/verified`).then(res => {
            console.log(res.data)
            this.setState({ data: res.data })
        })
    }

    render() {
        const actual = this.state.data.map((friend, i) => {
            return <ListItem primaryText={friend.user_name} id={friend.id} leftAvatar={<Avatar src={friend.image}/>} rightIconButton={ <RaisedButton secondary={true} 
            onClick={() => this.handleClick(friend)} label='Validator' />} />
        })

        return (
            <div>
                <Card className='centerContent'>
                    <CardTitle title="Motivational Amount"
                        subtitle="How much money will motivate you to better yourself?" />

                    <span className='sideBySide'>
                        <h3>Suggested:$ </h3>
                        <h3> axios set to state{this.state.suggested}</h3>
                    </span>
                    <span className='sideBySide'>
                        <h3>Average:</h3>
                        <h3>axios set to state{this.state.average}</h3>
                    </span>
                    <div>
                        <h2>Your Motivational Amount:</h2>
                        <span className='sideBySide'>
                            <h3>$</h3>
                            <TextField className='input' type='string' hintText={"25.00"} onChange={this.handleAmount} />
                        </span>
                    </div>

                    <div>
                        <Subheader>Confirmation Person</Subheader>
                        <div>
                            <List>
                                {actual} 
                            </List>
                        </div>
                        <form onSubmit={this.handleSubmit} className="form">
                            <label>
                                <CardElement style={{ base: { fontSize: '24px', color: 'black', '::placeholder': { color: 'black' } } }} />
                            </label>
                            <button className="orderButton" disabled={this.state.isDisabled}>Motivate Me!</button>
                        </form>
                    </div>
                </Card>

            </div>
        );
    }
}

export default withRouter(injectStripe(CheckoutForm));

