import React from 'react';
import { injectStripe, CardElement } from 'react-stripe-elements';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle } from 'material-ui/Card';

class CheckoutForm extends React.Component {
    constructor() {
        super()
        this.state = {
            amount: 0,
            suggested: 0,
            average: 0
        }
        this.handleAmount = this.handleAmount.bind(this)
    }

    handleAmount(e){
        this.setState({amount:e.target.value})
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

    render() {
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
                            <TextField className='input' type='number' hintText={25} onChange={this.handleAmount}/>
                        </span>
                    </div>

                        <div>
                            <form onSubmit={this.handleSubmit} className="form">
                                <label>
                                    <CardElement style={{ base: { fontSize: '24px', color: 'black', '::placeholder': { color: 'black' } } }} />
                                </label>
                                <button className="orderButton">Motivate Me!</button>
                            </form>
                        </div>
                </Card>
                <RaisedButton
                    className='orderButton'
                    label="Motivate Me" primary={true}
                    onClick={() => console.log('confirm')} />

            </div>
        );
    }
}

export default injectStripe(CheckoutForm);

