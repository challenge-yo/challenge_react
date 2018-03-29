import React, { Component } from 'react'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

class CategoryCard extends Component {
    render() {
        return(
            <List>
                <ListItem 
                    rightAvatar={<Avatar src={this.props.icon} />}
                    primaryText={this.props.categoryname} 
                    containerElement={this.props.nav}  
                />
                <Divider inset={true} />
            </List>
        )
    }
}

export default CategoryCard
