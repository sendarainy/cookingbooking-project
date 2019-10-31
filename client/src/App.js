import React from 'react';
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'
import { Navbar, NavItem } from 'react-materialize'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/pages/Home'
import Login from './components/pages/Login'



function App() {
  return (
    <Provider store={store}>
      <Router className='App'>
        <Navbar>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/login'>Login</NavItem>
        </Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
