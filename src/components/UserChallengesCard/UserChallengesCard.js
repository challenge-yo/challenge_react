import React from 'react'
import './UserChallengesCard.css'
// import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import { Card } from 'material-ui/Card';
import { ListItem } from 'material-ui/List';
// import Divider from 'material-ui/Divider';
// import Subheader from 'material-ui/Subheader';
// import Avatar from 'material-ui/Avatar';

// import badgeBuisness from '../../images/Badge_Buisness_256.png'
// import badgeEducation from '../../images/Badge_Education_256.png'
// import badgeFamily from '../../images/Badge_Family_256.png'
// import badgeFinance from '../../images/Badge_Finance_256.png'
// import badgeHealth from '../../images/Badge_Health_256.png'
// import badgeSocial from '../../images/Badge_Social_256.png'
// import badgeSpiritual from '../../images/Badge_Spiritual_256.png'

function UserChallengesCard(props) {

    return (
        <ListItem>
            <Card className='UserChallengesCard'>
                <div className='sideBySide'>
                    {/* <Avatar src={badgeFinance} /> */}
                    <h2>{props.challenge.challenge_name}</h2>
                </div>
                <div className='pushLeft'>
                    <h3>Time Left:{300}</h3>
                </div>
            </Card>
        </ListItem>
    )
}

export default UserChallengesCard