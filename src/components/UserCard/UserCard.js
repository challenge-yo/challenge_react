import React from 'react'
import './UserCard.css'
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import badgeBuisness from '../../images/Badge_Buisness_256.png'
import badgeEducation from '../../images/Badge_Education_256.png'
import badgeFamily from '../../images/Badge_Family_256.png'
import badgeFinance from '../../images/Badge_Finance_256.png'
import badgeHealth from '../../images/Badge_Health_256.png'
import badgeSocial from '../../images/Badge_Social_256.png'
import badgeSpiritual from '../../images/Badge_Spiritual_256.png'

function UserCard(props) {

    return (
        <div>
            <Card className='UserCard'>
                <CardHeader
                    title={props.user.first_name + ' ' + props.user.last_name}
                    subtitle={`Score: ${props.user.score}`}
                    avatar={props.user.image}
                />
                <CardTitle title="Badges" />
                <div className='centerContent'> 
                    <div className='badges'>
                        <div >
                            <img className='badgeIcon' src={badgeBuisness} alt="" />
                            <h4>{props.user.buisness}</h4>
                        </div>
                        <div >
                            <img className='badgeIcon' src={badgeEducation} alt="" />
                            <h4>{props.user.education}</h4>
                        </div>
                        <div >
                            <img className='badgeIcon' src={badgeFamily} alt="" />
                            <h4>{props.user.family}</h4>
                        </div>
                        <div >
                            <img className='badgeIcon' src={badgeFinance} alt="" />
                            <h4>{props.user.finance}</h4>
                        </div>
                        <div >
                            <img className='badgeIcon' src={badgeHealth} alt="" />
                            <h4>{props.user.health}</h4>
                        </div>
                        <div >
                            <img className='badgeIcon' src={badgeSocial} alt="" />
                            <h4>{props.user.social}</h4>
                        </div>
                        <div >
                            <img className='badgeIcon' src={badgeSpiritual} alt="" />
                            <h4>{props.user.spiritual}</h4>
                        </div>
                    </div>
                </div>

                {/* // <h3>Stats:</h3>
                // <CardText>
                //     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                //     Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                //     Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                //     Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                // </CardText> */}
            </Card>
        </div>
    )
}

export default UserCard