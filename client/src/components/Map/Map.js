import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, Point, Size } from 'google-maps-react';
// import store from '../../store';
import {
  getVenuesAC,
  requestVenuesSuccessAC
} from '../../actions/venueActions';

const mapStyles = {
  width: '100%',
  height: '80%',
  // marginLeft: 'auto',
};

// const pou = fetch(
//   'https://geocode-maps.yandex.ru/1.x/?apikey=07af190e-875a-45b5-85a7-0f91abd62198&geocode=Метро ленинский проспект&ll=37.618920,55.756994&spn=3.552069,2.400552'
// );

class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: 55.738643, longitude: 37.589588 },
        { latitude: 55.759121, longitude: 37.617706 },
        { latitude: 55.745592, longitude: 37.648765 },
        { latitude: 55.770308, longitude: 37.600157 },
        { latitude: 55.759496, longitude: 37.58161 }
      ]
    };
  }

  displayMarkers = () => {
    // return this.state.stores.map((store, index) => {
    return this.props.venues.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.geo.lat,
            lng: store.geo.lng
          }}
          onClick={() => console.log('You clicked me!')}
        />
      );
    });
  };

  render() {
    // console.log(store.getState());
    // console.log(this.props.venues);
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{ lat: 55.749591, lng: 37.62376 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     getVenues: () => dispatch(getVenuesAC())
//   };
// }

// connect(
//   null,
//   mapDispatchToProps
// )(MapContainer);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVqXSmsIDhO-EClFmjLr1Jj9JqlNABzOE'
})(MapContainer);
