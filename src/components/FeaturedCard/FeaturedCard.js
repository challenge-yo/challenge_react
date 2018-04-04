import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText, CardMedia, CardActions} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';

class FeaturedCard extends Component {
    render() {
        return(
        <div>
            <Card>
                <CardHeader titleStyle={{ fontSize: '1.5rem', paddingTop: '7px'}} title={this.props.name.toUpperCase()} avatar={this.props.icon}/>
                <CardMedia>
                    <img src={ this.props.image } alt='' />
                </CardMedia>
                <CardText>
                    <b>Description:</b> {this.props.description}
                </CardText>
                <CardText>
                    <b>Category:</b> {this.props.category}
                </CardText>
                <CardText>
                    <b>Difficulty:</b> {this.props.difficulty}
                </CardText>
                <CardText>
                    <b>Days to Complete:</b> {this.props.time}
                </CardText>
                <CardActions>
                    <RaisedButton href={`/#/wager/${this.props.id}`} label='Accept Challenge' secondary={true} icon={<Add />} /> 
                </CardActions>
            </Card>
        </div>    
        )
    }
}

export default FeaturedCard