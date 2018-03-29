import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Paper from 'material-ui/Paper';
import FriendsIcon from 'material-ui/svg-icons/action/supervisor-account'
import ProfileIcon from 'material-ui/svg-icons/action/account-circle'
import HomeIcon from 'material-ui/svg-icons/action/home'
import ChallengeIcon from 'material-ui/svg-icons/action/assessment'

class GlobalFooter extends Component {
  state = {
    selectedIndex: 0,
  };

  componentDidMount() {
    axios.get('/auth/me')
    .then( resp => {
        if (resp.data === 'Not logged in!') {
            this.props.history.push('/')
        }
    })
    .catch( err => {
        console.error( err )
    })
}

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
            <Paper zDepth={1}>
                <BottomNavigation style={{ position: 'fixed', bottom: 0, width: '100vw' }} selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    icon={<HomeIcon />}
                    onClick={() => this.select(0)}
                    containerElement={<Link to="/home"/>}
                />
                <BottomNavigationItem
                    icon={<ChallengeIcon />}
                    onClick={() => this.select(1)}
                    containerElement={<Link to="/categories"/>}
                />
                    <BottomNavigationItem
                    icon={<FriendsIcon  />}
                    onClick={() => this.select(2)}
                    containerElement={<Link to="/friends"/>}
                />
                    <BottomNavigationItem
                    icon={<ProfileIcon />}
                    onClick={() => this.select(3)}
                    containerElement={<Link to="/profile"/>}
                />
                </BottomNavigation>
            </Paper>
    );
  }
}

export default withRouter(GlobalFooter)