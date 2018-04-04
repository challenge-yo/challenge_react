import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardTitle } from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import './checkout.css'
import {List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { SelectField, CardHeader, Divider } from 'material-ui';
import MenuItem from 'material-ui/MenuItem';
import CheckBox from 'material-ui/svg-icons/action/check-circle'
import Select from 'material-ui';


class CheckoutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            value: null,
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
        console.log('handle Submit:state:', this.state)
        console.log('handle Submit:props:', this.props)
        
        let body = { 
            challenge_id: this.props.challenge.id*1,
            user_id: 0,// set on server from req.user
            validator_id: this.state.userChallenge.validator_id*1,
            start_time:moment().format('X')*1,
            end_time: moment().format('X')*1 + 5, 
            validation_window: moment().format('X')*1 + 10,
            users_wager:this.state.amount*1,
            is_validated:0,// 0 = false
            email:'',
            currency:'',
            customer:'',
            source:'',
         }
         axios.post('/api/userChallenges', body).then(res =>{
             console.log('done', res.data)
         })
         this.props.history.push('/categories')

        // this.props.stripe.createToken({ name: 'Clyde' }).then(({ token }) => {
        //     console.log('CF token:', token);
        //     axios.post('/api/payment', { token, amount: this.state.amount }).then(resp => {
        //         console.log("RESP", resp)
        //     })
        // });
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

    handleSelect = (event, index, value) => this.setState({value});

    actualFriends() {
        axios.get(`/api/verified`).then(res => {
            this.setState({ data: res.data })
        })
    }

    sub(){
        console.log('sub')
        let body = { 
            challenge_id: this.props.challenge.id*1,
            user_id: 0,// set on server from req.user
            validator_id: this.state.userChallenge.validator_id*1,
            start_time:moment().format('X')*1,
            end_time: moment().format('X')*1 + 5, 
            validation_window: moment().format('X')*1 + 10,
            user_wager:this.state.amount*1,
            is_validated:0,// 0 = false
            email:'',
            currency:'',
            customer:'',
            source:'',
         }
         axios.post('/api/customer', body).then(res=>{
             console.log('created customer', res.data)
         })
    }
    charge(){
        console.log('charge')
    }

    render() {
        const actual = this.state.data.map((friend, i) => {

            return <MenuItem key={i} primaryText={friend.user_name} id={friend.id} leftIcon={<Avatar src={friend.image}/>} onClick={ () => this.handleClick( friend )} />

        })

        return (
                <Card className='centerContent'>
                    <CardTitle title="Motivational Amount"
                               subtitle="How much money will motivate you to better yourself?" />

                        <CardHeader title={'Challenge: ' + this.props.challenge.challenge_name } />
                        <CardHeader title={'Suggested Amount: $' +  this.props.challenge.suggested_wager} />

                    
                            <CardTitle title="Choose an Amount" />
                            <TextField className='input' type='string' hintText={"$ " + "25.00"} onChange={this.handleAmount} />
                   

                    
                        <CardTitle title="Validator"
                                subtitle="Choose a friend to validate your completion of the challenge" />
                        
                        <SelectField 
                            autoWidth={ true }
                            value={this.state.value}
                            onChange={this.handleSelect}>

                            { actual }

                        </SelectField>
                        
                        <form onSubmit={this.handleSubmit} className="form">
                                <br />
                                <CardElement style={{ base: { fontSize: '24px', color: 'white', '::placeholder': { color: 'white' } } }} />
                                <br />
                                <Divider />
                                <br />
                            <button className="orderButton" disabled={this.state.isDisabled}>Motivate Me!</button>
                        </form>
                    
                </Card>
        );
    }
}

export default withRouter(injectStripe(CheckoutForm));

