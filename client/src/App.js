import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import { Navbar, NavItem } from 'react-materialize';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Map from './components/Map/Map';
import AddVenue from './components/AddVenue/AddVenue';
import FilterBar from './components/FilterBar/FilterBar';
import Venue from './components/Venue/Venue'

function App() {
  return (
    <Provider store={store}>
      <Router className='App'>
        <Navbar>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/login'>Login</NavItem>
          <NavItem href='/venues/new'>Добавить студию</NavItem>
        </Navbar>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route exact path='/venues/new' component={AddVenue} />
          <Route path='/venues/:id' component={Venue}/>
        </Switch>
        {/* <Route exact path='/' component={Map} /> */}
      </Router>
    </Provider>
  );
}

export default App;
