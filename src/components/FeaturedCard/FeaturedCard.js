import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText, CardMedia, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

class FeaturedCard extends Component {
    render() {
        return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Card>
<<<<<<< HEAD
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
=======
                <CardHeader titleStyle={{ fontSize: '1.5rem', paddingTop: '7px'}} title={this.props.name.toUpperCase()} avatar={this.props.icon}/>
                <CardMedia>
                    <img src='https://pixabay.com/get/e13db90f2af01c22d9584518a33219c8b66ae3d01bb314449df1c578/push-ups-888024_1920.jpg' />
                </CardMedia>
                <CardText>
                    <b>Description:</b> {this.props.description}
>>>>>>> e89c574e1531bbd825ad60b5d405c8130aeecf0d
                </CardText>
                <Divider />
                <CardText>
                    <b>Category:</b> {this.props.category}
                </CardText>
                <Divider />
                <CardText>
                    <b>Difficulty:</b> {this.props.difficulty}
                </CardText>
                <Divider />
                <CardText>
                    <b>Days to Complete:</b> {this.props.time}
                </CardText>
<<<<<<< HEAD
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
=======
                <CardActions>
                    <RaisedButton href={`http://localhost:3000/#/wager/${this.props.id}`} label='Accept Challenge' primary={true} icon={<Add />} /> 
                </CardActions>
>>>>>>> e89c574e1531bbd825ad60b5d405c8130aeecf0d
            </Card>
        </div>    
        )
    }
}
export default FeaturedCard