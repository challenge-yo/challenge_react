import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import FriendsIcon from 'material-ui/svg-icons/action/supervisor-account'
import ProfileIcon from 'material-ui/svg-icons/action/account-circle'
import HomeIcon from 'material-ui/svg-icons/action/home'
import ChallengeIcon from 'material-ui/svg-icons/action/assessment'

const friendsIcon = <FriendsIcon  />
const profileIcon = <ProfileIcon />
const homeIcon = <HomeIcon />
const challengeIcon = <ChallengeIcon />

class GlobalFooter extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
            <Paper zDepth={1}>
                <BottomNavigation style={{ position: 'fixed', bottom: 0, width: '100vw' }} selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                    icon={homeIcon}
                    onClick={() => this.select(0)}
                    containerElement={<Link to="/"/>}
                />
                <BottomNavigationItem
                    icon={challengeIcon}
                    onClick={() => this.select(1)}
                    containerElement={<Link to="/challenges"/>}
                />
                    <BottomNavigationItem
                    icon={friendsIcon}
                    onClick={() => this.select(2)}
                    containerElement={<Link to="/friends"/>}
                />
                    <BottomNavigationItem
                    icon={profileIcon}
                    onClick={() => this.select(3)}
                    containerElement={<Link to="/profile"/>}
                />
                </BottomNavigation>
            </Paper>
    );
  }
}

export default GlobalFooter