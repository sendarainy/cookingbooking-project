import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
// import { Card } from 'react-materialize'
import { getVenues, filterVenues } from '../../actions/venueActions'
import { getReservations } from '../../actions/reservationActions'
import './ListVenues-style.css'
import { connect } from 'react-redux';

class ListVenues extends Component {
  componentDidMount = () => {
    this.props.getVenues()
    this.props.getReservations()
  }
  
  dropFilters = () => {
    // TODO
  }
  
  showResults = () => {
    return this.props.filtered || this.props.venues
  }
  render() {
    return(
      <Fragment>
        <ul className='venueUlContainer'>
          {this.showResults().map((venue) => 
            <li key={venue._id} className='liContainer'>
              <div className='venue'>
                <div className='infoContainer'>
                  <Link to={`/venues/${venue._id}`}>
                    {venue.name}<br/>
                  </Link>
                  {venue.adress}
                  <p>
                    price: {venue.price}
                  </p>
                </div>
                <div className='picContainer'>
                  <img className='venuePic' src={venue.img} alt="картинка будет здесь"/>
                </div>
              </div>
            </li>
          )}
        </ul>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
  venues: state.venues.venues,
  filtered: state.venues.filtered,
  loading: state.venues.loading
})
export default connect(mapStateToProps, { getVenues, filterVenues, getReservations })(ListVenues)