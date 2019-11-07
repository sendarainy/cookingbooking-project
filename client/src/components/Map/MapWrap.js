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

  showResults = () => {
    return this.props.filtered || this.props.venues;
  };

  render() {
    return <Map venues={this.showResults()} />;
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues.venues,
    filtered: state.venues.filtered
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
