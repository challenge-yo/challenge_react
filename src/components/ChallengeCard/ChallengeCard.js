import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card'
// import {darkBlack} from 'material-ui/styles/colors'
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';

class ChallengeCard extends Component {
    render() {
        return(
            <List>
               <Subheader>{this.props.category}</Subheader> 
                    <Card>
                        <ListItem
                            leftAvatar={<Avatar src={this.props.icon} />}
                            primaryText={this.props.name}
                            // secondaryText={
                                // <p>
                                //     <span style={{color: darkBlack}}>Category:</span>
                                //      {this.props.category}
                                //      {/* <span style={{color: darkBlack}}>Difficulty:</span>
                                //      {this.props.difficulty}
                                //      <span style={{color: darkBlack}}>Days to Complete:</span>
                                //      {this.props.time} */}
                                // </p>
                                // }
                            />
                    </Card>
                <Divider/>
            </List>
        )
    }
}

export default ChallengeCard
