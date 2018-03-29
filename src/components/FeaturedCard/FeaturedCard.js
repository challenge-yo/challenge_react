import React, { Component } from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card';


class FeaturedCard extends Component {
    render() {
        return(
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
        )
    }
}

export default FeaturedCard