import React, { Component } from 'react';
import Map from '../Map/Map'
import ListVenues from '../venue/ListVenues'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h4 style={{textAlign: "center", marginBottom: '20px',}}>CookingBooking</h4>
        <Map />
        <ListVenues />
      </div>
    );
  }
}
