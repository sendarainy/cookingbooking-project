import React, { Component } from 'react';
import Map from '../Map/Map'
import List from '../List/List'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h4 style={{textAlign: "center", marginBottom: '20px',}}>CookingBooking</h4>
        <Map />
        <List />
      </div>
    );
  }
}
