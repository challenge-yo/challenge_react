import React from 'react'
import './UserCard.css'
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';


/// PLACHOLDER DATA TILL I GIT PROPS FROM DB
let badges= [
    {icon:'1', number:3},
    {icon:'2', number:2},
    {icon:'3', number:3},
    {icon:'4', number:4},
    {icon:'5', number:6},
    {icon:'6', number:5},
    {icon:'7', number:1}
]
badges = badges.map((x,i)=>{return(
    <div key={i}>
        <h4>{x.icon}</h4>
        <h4>{x.number}</h4>
    </div>
)})
////////////////////////////////////////

function UserCard(props) {
    
    return (
        <div>
            <Card>
                <CardHeader
                    title={props.user.first_name +' '+props.user.last_name}
                    subtitle={"Rank: 34"}
                    avatar={props.user.image}
                />
                <CardTitle title="Badges" />
                <div className='badges'>
                    {badges}
                </div>
                <h3>Stats:</h3>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
        </div>
    )
}

export default UserCard