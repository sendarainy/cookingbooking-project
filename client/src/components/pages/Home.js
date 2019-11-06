import React, { Component } from 'react';
import ListVenues from '../venue/ListVenues'
import MapWrap from '../Map/MapWrap';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h4 style={{textAlign: "center", marginBottom: '20px',}}>CookingBooking</h4>
        <MapWrap />
        <ListVenues />
      </div>
    );
  }
}
