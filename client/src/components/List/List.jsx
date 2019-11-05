import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Card } from 'react-materialize'
import './List-style.css';

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      venues: []
    };
  }

  componentDidMount = async () => {
    const resp = await fetch('api/venues');
    let json = await resp.json();
    this.setState({ venues: json });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.venues.map(venue => (
            <li key={venue._id}>
              <div className='venue'>
                <div className='infoContainer'>
                  <Link to={`/venues/${venue._id}`}>
                    {venue.name}
                    <br />
                  </Link>
                  {venue.adress}
                  <p>price:</p>
                </div>

                <div className='picContainer'>
                  <img
                    className='venuePic'
                    src={venue.img}
                    alt='картинка будет здесь'
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
