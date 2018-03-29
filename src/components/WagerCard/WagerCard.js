import React from 'react'
import './WagerCard.css'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardActions, CardTitle } from 'material-ui/Card';


function WagerCard(props) {
    return (
        <div>
            <Card className='centerContent'>
                <CardTitle title="Motivational Amount"
                    subtitle="How much money will motivate you to better yourself?" />
                <span className='centerContent'>
                    <h2>{props.challenge.challenge_name} </h2>
                </span>
                <span className='sideBySide'>
                    <h3>Suggested:$ </h3>
                    <h3>{props.challenge.suggested_wager}</h3>
                </span>
                <span className='sideBySide'>
                    <h3>Average:</h3>
                    <h3>PROPS</h3>
                </span>
                <div>
                    <h2>Your Motivational Amount:</h2>
                    <span className='sideBySide'>
                        <h3>$</h3>
                        <TextField className='input' type='number' hintText={25} />
                    </span>
                </div>
                <CardActions className='pushApart'>
                    <FlatButton label="Back" />
                    <RaisedButton label="Confirm" primary={true}
                        onClick={() => console.log('confirm')} />
                </CardActions>
            </Card>
        </div>
    )
}

export default WagerCard