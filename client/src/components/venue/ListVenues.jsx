import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
// import { Card } from 'react-materialize'
import { getVenues } from '../../actions/venueActions'
import { getReservations } from '../../actions/reservationActions'
import './ListVenues-style.css'
import { connect } from 'react-redux';
import BookingModal from './BookingModal'

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
                  <p>телефон: {venue.phone}</p>
                  <p>адрес: {venue.address}</p>
                  <p>время работы: <br/>с {venue.from} до {venue.to}</p>
                </div>
                <div className='priceButtonDiv'>
                  <div><BookingModal venueId={venue._id} user={this.props.user}/></div>
                  <div style={{marginTop: '10px'}}>цена: {venue.price} р/час</div>
                </div>
                <div className='Schedule'>

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
  user: state.auth.user,
  venues: state.venues.venues,
  filtered: state.venues.filtered,
  loading: state.venues.loading,
  reservations: state.reservations.filtered
})
export default connect(mapStateToProps, { getVenues, getReservations })(ListVenues)