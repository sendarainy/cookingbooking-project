import React, { Component } from 'react';
import FilterBar from '../FilterBar/FilterBar'
import ListVenues from '../venue/ListVenues'
import MapWrap from '../Map/MapWrap';


export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{textAlign: "center", marginBottom: '20px',}}>
          <h4>CookingBooking</h4>
          <p>Агрегатор кулинарных студий в москве</p>
        </div>
        <ListVenues />
        <MapWrap />
      </div>
    );
  }
}
