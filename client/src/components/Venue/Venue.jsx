import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, DatePicker, Modal } from 'react-materialize'
// import { Card } from 'react-materialize'
import './Venue-style.css'

export default class Venue extends Component {
  constructor(match) {
    super()
    this.state = {
      id: match.match.params.id,
      venue: {
        time: []
      },
      date: '',
      availableTime: ''
    }
  }

  componentDidMount = async () => {

    const resp = await fetch('http://localhost:5000/api/venues');
    let json = await resp.json();
    this.setState({ ...this.state, venue: json[this.state.id] });
    // console.log(this.state.venue.time)
    // this.state.venue.time.map((hour) => 
    // console.log(hour))

  }

  TimeQuery(e) {
    console.log(e.target.name);
  }



  render() {
    return (
      <div>
        <div className='backButton'>
          <Link to={'/'}>
            <Button >Назад</Button>
          </Link>
        </div>
        <div className='venueContainer'>
          <div className='venueInfo'>
            <h5>Кулинарная студия {this.state.venue.name}</h5>
            <h6>О нас</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, facere recusandae numquam dolorum iusto, praesentium error est inventore optio repellat expedita obcaecati, qui officia. Magni consectetur possimus accusamus voluptate quisquam.</p>
            <div>
              <p> </p>
              <p>Контакты</p>
              <p>Адрес</p>
              <p>Телефон</p>
              <p>email</p>
            </div>
          </div>
          <div className='venuePic'>
            <div className='venueDatePicker'>

              <DatePicker onChange={ (date) => {
                this.setState({ date: date })
                console.log(this.state.date);
                
              }
              }
                value='Выберите дату что бы увидеть доступное время'
                options={{
                  autoClose: true,
                  format: 'mmmm dd, yyyy'
                }} />

              <Modal trigger={<Button className='backButton'>Показать расписание</Button>}>
                {this.state.venue.time && this.state.venue.time.map((hour, i) =>
                  <Button disabled={hour[0]} key={i} onClick={this.TimeQuery} name={hour[1]}>{hour[1]}</Button>
                )}

                <Button modal="close">Забронировать</Button>

              </Modal>

            </div>
            <img className='mainPic' src={this.state.venue.img} alt="" />
          </div>
        </div>
      </div>
    )
  }
}