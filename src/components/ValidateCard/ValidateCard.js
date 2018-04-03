import React from 'react'
import './ValidateCard.css'
// import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton'
import Avatar from 'material-ui/Avatar'
import { ListItem } from 'material-ui/List';


function ValidateCard(props) {
    return (
        <Card className='UserChallengesCard'>
                <div className='sideBySide'>
                    <h3>Challenge: {props.challenge.challenge_name}</h3>
                </div>
            <ListItem leftAvatar={<Avatar src={props.challenge.image} />} primaryText={props.challenge.user_name} rightIconButton={<RaisedButton onClick={()=>props.handleValidate(props.challenge)} secondary={ true } label='Validate' />} />
        </Card>
    )
}

export default ValidateCard