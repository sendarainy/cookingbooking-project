import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'
import { Navbar, NavItem } from 'react-materialize'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/pages/Home'
import Header from './components/Header'
import LoginModal from './components/auth/LoginModal'
import SignupModal from './components/auth/SignupModal'
import { loadUser } from './actions/authActions'


export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }
  
  render() {
    return (
      <Provider store={store} className='App'>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/login' component={Login} /> */}
          </Switch>
        </Router>
      </Provider>
    );
  }
}

