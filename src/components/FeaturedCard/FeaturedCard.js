import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Add from 'material-ui/svg-icons/content/add';



class FeaturedCard extends Component {
    render() {
        return(
        <div>
            <Card>
                <CardHeader title={this.props.name} avatar={this.props.icon}/>
                <CardText>
                    Description:
                </CardText>
                <CardText>
                    {this.props.description}
                </CardText>
                <CardText>
                    Category: {this.props.category}
                </CardText>
                <CardText>
                    Difficulty: {this.props.difficulty}
                </CardText>
                <CardText>
                    Days to Complete: {this.props.time}
                </CardText>
            </Card>
            <Link to={`/wager/${this.props.id}`}><RaisedButton
            label='Accept Challenge'
            icon={<Add/>}
            /></Link>
        </div>    
        )
    }
}

export default FeaturedCard