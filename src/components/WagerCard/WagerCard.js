import React from 'react'
import './WagerCard.css'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle } from 'material-ui/Card';
import InjectedCheckoutForm from './../CheckoutForm/CheckoutForm';


function WagerCard(props) {
    return (
        <div>
            <h2>{props.challenge.challenge_name} </h2>

            <div>
                <InjectedCheckoutForm  />
            </div>
        </div>
    )
}

export default WagerCard