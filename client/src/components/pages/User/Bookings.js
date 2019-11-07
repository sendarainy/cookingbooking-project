import React, { Component } from 'react';
import { Col, Table, Button } from 'react-materialize'
import { Link } from 'react-router-dom'

export default class Bookings extends Component {
  render() {
  return (
    <Col className='s12'>
      <h4>Мои бронирования</h4>
        <Table>
          <thead>
          <tr>
            <th>Название студии</th>
            <th>Дата</th>
            <th>Участинки</th>
            <th>Стоимость</th>
            <th>Вы съэкономили</th>
          </tr>
          </thead>
          <tbody>
            {this.props.bookings.map((booking, i) => <tr key={booking._id}>
              <td><Link to={`/venues/${booking.venueId}`}>{booking.venueName}</Link></td>
              <td>{booking.date.toDateString()}</td>
              <td>{booking.attenders + ' человека'}</td>
              <td>{booking.price / booking.attenders + ' .р'}</td>
              <td>{booking.price - (booking.price / booking.attenders) + ' .р'}</td>
              <td><Button
              onClick={() => this.props.bookings.splice(i, 1)} 
              className='red lighten-1' 
              tooltip='Отменить бронь' 
              tooltipOptions={{ position: 'right'}}
              >X</Button></td>
            </tr>
            )}
          </tbody>
        </Table>
      </Col>
  )
            }
}