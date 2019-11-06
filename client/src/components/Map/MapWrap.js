import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getVenuesAC,
  requestVenuesSuccessAC
} from '../../actions/venueActions';
import Map from './Map';

class MapWrap extends Component {
  componentDidMount() {
    this.props.getVenues();
  }
  render() {
    return <Map venues={this.props.venues} />;
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues.venues
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getVenues: () => dispatch(getVenuesAC())
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapWrap);
