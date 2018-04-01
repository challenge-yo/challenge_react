import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';



class FeaturedCard extends Component {
    render() {
        return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Card>
                <CardHeader containerStyle={{display: 'flex', alignItems: 'center'}}>
                <CardText style={{fontSize: 50}}>
                {this.props.name} 
                </CardText>
                </CardHeader>
                <Divider />
                <CardText style={{fontSize: 32}}>
                    Description:
                </CardText>
                <CardText style={{fontSize: 22}}>
                    {this.props.description}
                </CardText>
                <Divider />
                <CardText>
                    Category: {this.props.category}
                </CardText>
                <Divider />
                <CardText>
                    Difficulty: {this.props.difficulty}
                </CardText>
                <Divider />
                <CardText>
                    Days to Complete: {this.props.time}
                </CardText>
                <Divider />
                <CardText>
                Badge:
                <Avatar src={this.props.icon}></Avatar>
                </CardText>
                <Divider />
                <Link to={`/wager/${this.props.id}`}><RaisedButton
                     label='Accept Challenge'
                     icon={<Add/>}
                 /></Link>
            </Card>
        </div>    
        )
    }
}
export default FeaturedCard