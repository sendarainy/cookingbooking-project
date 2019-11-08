import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, DatePicker, Modal, Table, Checkbox } from 'react-materialize';
// import { Card } from 'react-materialize'
import './Venue-style.css';

class Venue extends Component {
  constructor(match) {
    super();
    this.state = {
      id: match.match.params.id,
      venue: {
        time: []
      },
      date: '',
      availableTime: ''
    };
  }

  render() {
    const venue = {
      ...this.props.venues.venues.find(
        el => el._id === this.props.match.params.id
      )
    };
    const { pastry, gastro, cold } = { ...venue.options };
    return (
      <div>
        <div className='backButton'>
          <Link to={'/'}>
            <Button>Назад</Button>
          </Link>
        </div>
        <div className='venueContainer'>
          <div className='venueInfo'>
            <h5>Кулинарная студия {venue.name}</h5>
            <h6>
              <img
                style={{ width: '600px', marginLeft: '50px' }}
                src={venue.img}
                alt=''
              />
            </h6>
            {/* <div className='venueDatePicker'>
              <DatePicker
                onChange={date => {
                  this.setState({ date: date });
                  console.log(this.state.date);
                }}
                value='Выберите дату что бы увидеть доступное время'
                options={{
                  autoClose: true,
                  format: 'mmmm dd, yyyy'
                }}
              />

              <Modal
                trigger={
                  <Button className='backButton'>Показать расписание</Button>
                }
              >
                {this.state.venue.time &&
                  this.state.venue.time.map((hour, i) => (
                    <Button
                      disabled={hour[0]}
                      key={i}
                      onClick={this.TimeQuery}
                      name={hour[1]}
                    >
                      {hour[1]}
                    </Button>
                  ))}

                <Button modal='close'>Забронировать</Button>
              </Modal>
            </div> */}
          </div>
          <div className='venuePic'>
            <Table
              style={{ width: '500px', margin: 'auto', marginTop: '10px' }}
            >
              <tbody>
                <tr>
                  <th>Адрес</th>
                  <td>{venue.address}</td>
                </tr>
                <tr>
                  <th>Cайт</th>
                  <td>{venue.web}</td>
                </tr>
                <tr>
                  <th>Телефон</th>
                  <td>{venue.phone}</td>
                </tr>
                <tr>
                  <th>Часы работы</th>
                  <td>
                    с {venue.from} до {venue.to}
                  </td>
                </tr>
                <tr>
                  <th>Вместимость</th>
                  <td>до {venue.capacity} человек</td>
                </tr>
                <tr>
                  <th>Цена за 1 час</th>
                  <td>{venue.price},00 ₽</td>
                </tr>
                <tr>
                  <th>Кондитерский цех</th>
                  <td>
                    <Checkbox checked={pastry} />
                  </td>
                </tr>
                <tr>
                  <th>Кулинарный цех</th>
                  <td>
                    <Checkbox checked={gastro} />
                  </td>
                </tr>
                <tr>
                  <th>Холодный цех</th>
                  <td>
                    <Checkbox checked={cold} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    venues: state.venues,
    loading: state.loading,
    error: state.error,
    msg: state.msg,
    status: state.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // addVenue: data => dispatch(addVenueAC(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Venue);
