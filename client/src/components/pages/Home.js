import React, { Component } from 'react';
import Map from '../Map/Map'
import List from '../List/List'
import FilterBar from '../FilterBar/FilterBar'


export default class Home extends Component {
  render() {
    return (
      <div>
        <FilterBar />
        <div style={{textAlign: "center", marginBottom: '20px',}}>
          <h4>CookingBooking</h4>
          <p>Агрегатор кулинарных студий в Москве</p>
        </div>
        <div className={'ListMapContainer'}>
          <div>
            <List />
          </div>
          <div>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}
