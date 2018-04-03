import React from 'react'
import './ValidateCard.css'
// import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { Card } from 'material-ui/Card';
import { ListItem } from 'material-ui/List';


function ValidateCard(props) {
    console.log(props)
    return (
        <ListItem>
            <Card className='UserChallengesCard'>
                <div className='sideBySide'>
                    <h3>Challenge: {props.challenge.challenge_name}</h3>
                </div>
                <div className='pushLeft'>
                    <button onClick={()=>props.handleValidate(props.challenge)}>Validate</button>
                </div>
            </Card>
        </ListItem>
    )
}

export default ValidateCard