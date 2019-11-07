import React, { Component } from 'react';
import { Row, Container, Col, Table, Button } from 'react-materialize'
import Bookings from './Bookings'
import UserVenues from './UserVenues'
import { Link } from 'react-router-dom'

class User extends Component {
  state = {
    bookings: [
      { _id: '123', venueName: 'My place', venueId: 'asdasd', date: new Date(), attenders: 4, price: 1500 },
      { _id: '1234', venueName: 'My place 2', venueId: 'asdasd', date: new Date(), attenders: 2, price: 1200 },
      { _id: '1235', venueName: 'My place 3', venueId: 'asdasd', date: new Date(), attenders: 5, price: 1900 },

    ],
    venues: null
  }
  showBookings() {
    if (this.state.bookings) {
      return <Bookings bookings={this.state.bookings} />
    }
    return (
      <Col s={12}>
        <h4>У вас пока нет ниодоного бронирования</h4>
        <h5>:(</h5>
      </Col>
    )
  }
  isOwner() {
    if (this.state.venues) {
      return <UserVenues venues={this.state.venues} />
    }
    return (
      <Col s={12}>
        <h4>Вы владелец студии?</h4>
        <Button>Добавить</Button>
      </Col>
    )
  }
  render() {
    return (
      <Container>
        <Row>
          <Bookings bookings={this.state.bookings} />
        </Row>
        <Row>
          {this.isOwner()}
        </Row>
      </Container>
    )
  }
}

export default User;