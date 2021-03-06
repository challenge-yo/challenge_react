import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import FriendsIcon from 'material-ui/svg-icons/action/supervisor-account'
import ProfileIcon from 'material-ui/svg-icons/action/account-circle'
import HomeIcon from 'material-ui/svg-icons/action/home'
import ChallengeIcon from 'material-ui/svg-icons/action/assessment'

// dont need to define variable  just declare them as components
// const friendsIcon = <FriendsIcon  />
// const profileIcon = <ProfileIcon />
// const homeIcon = <HomeIcon />
// const challengeIcon = <ChallengeIcon />

class GlobalFooter extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
            <Paper zDepth={1}>
                <BottomNavigation style={{ width: '100vw' }} selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    icon={<HomeIcon />}
                    onClick={() => this.select(0)}
                    containerElement={<Link to="/"/>}
                />
                <BottomNavigationItem
                    icon={<ChallengeIcon />}
                    onClick={() => this.select(1)}
                    containerElement={<Link to="/challenges"/>}
                />
                    <BottomNavigationItem
                    icon={<FriendsIcon />}
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

export default GlobalFooter