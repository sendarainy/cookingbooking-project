import React, { Component } from 'react';
import Map from '../Map/Map'
import List from '../List/List'
import FilterBar from '../FilterBar/FilterBar'

export default class Home extends Component {
  render() {
    return (
      <div>
        <FilterBar />
        <h4 style={{textAlign: "center", marginBottom: '20px',}}>CookingBooking</h4>
        <Map />
        <List />
      </div>
    );
  }
}
