import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
// import { Card } from 'react-materialize'
import { getVenues, filterVenues } from '../../actions/venueActions'
import './ListVenues-style.css'
import { connect } from 'react-redux';

class ListVenues extends Component {
  componentDidMount = () => {
    this.props.getVenues()
  }

  dropFilters = () => {
    this.props.getVenues()
  }
  
  showResults = () => {
    return this.props.filtered || this.props.venues
  }

  render() {
    return(
      <Fragment>
        <ul>
          {this.showResults().map((venue) => 
            <li key={venue.id}>
              <div className='venue'>
                <div className='infoContainer'>
                  <Link to={`/venues/${venue.id}`}>
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
export default connect(mapStateToProps, { getVenues, filterVenues })(ListVenues)