import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import {Card} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

class CategoryCard extends Component {
    render() {
        return(
            <List>
                <Card>
                    <ListItem
                        rightAvatar={<Avatar src={this.props.icon} />}
                        primaryText={this.props.name} 
                    />
                </Card>
                <Divider/>
            </List>
        )
    }
}
export default CategoryCard
