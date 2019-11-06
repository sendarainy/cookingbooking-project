import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/pages/Home';
import Header from './components/Header';
import AddVenue from './components/venue/AddVenue';
import FilterBar from './components/FilterBar/FilterBar';
import Venue from './components/venue/Venue'
import { loadUser } from './actions/authActions';

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store} className='App'>
        <Router>
          <Header />
          <FilterBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route exact path='/venues/new' component={AddVenue} />
            <Route path='/venues/:id' component={Venue}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
