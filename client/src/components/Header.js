import React, { Component } from 'react';
import LoginModal from './auth/LoginModal'
import SignupModal from './auth/SignupModal'
import Logout from './auth/Logout'
import { Navbar, NavItem } from 'react-materialize'
import { connect } from 'react-redux'


class Header extends Component {
  render() {
    return (
      <Navbar>
        <NavItem href='/'>Home</NavItem>
        {/* <NavItem href='/login'>Login</NavItem> */}
        {!this.props.user && <LoginModal />}
        {!this.props.user && <SignupModal />}
        {this.props.user && <Logout />}
        {this.props.user && <a href={`/users/${this.props.user._id}`}>{this.props.user.email}</a>}
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps)(Header)