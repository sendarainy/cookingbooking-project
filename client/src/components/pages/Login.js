import React, { Component } from 'react';
import { TextInput, Button } from 'react-materialize'

export default class Login extends Component {
  state = {}
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <TextInput label='Your email' name='email' email onChange={this.handleChange}/>
        <TextInput label='Your password' name='password' password onChange={this.handleChange} />
        <Button>Login</Button>
      </div>
    )
  }
}
