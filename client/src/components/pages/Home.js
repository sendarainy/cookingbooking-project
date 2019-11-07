import React, { Component, Fragment } from 'react';
import FilterBar from '../FilterBar/FilterBar'
import ListVenues from '../Venue/ListVenues'
import MapWrap from '../Map/MapWrap';


export default class Home extends Component {
  render() {
    return (
      <div>
        <FilterBar className='right' />
  
        <div className='listMap'>

          <div style={{width: '100%', overflow: 'hidden'}}>
            <div style={{height: '500px', width:'100%', 'overflow-y': 'scroll'}}>
              <ListVenues />
            </div>
            <div className='MapContainer'>
              <MapWrap />
            </div>
          </div>

        </div>
      </div>
    );
  }
}
