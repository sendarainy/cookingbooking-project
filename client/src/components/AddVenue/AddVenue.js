import React, { Component } from 'react';
import { Row, Col, TextInput, Card, Button, Icon } from 'react-materialize';
import image from '../../images/mk.jpg';
import CardTitle from './CardTitle';
import './AddVenue.css';

class AddVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone: '',
      email: ''
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = async e => {
    e.preventDefault();
    const resp = await fetch('/api/venues/new', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    const tasks = await resp.json();
    this.setState({
      name: '',
      address: '',
      phone: '',
      email: ''
    });
    console.log(tasks);
  };

  render() {
    return (
      <div className='add-venue-main'>
        <Row>
          <h1 className='add-venue-title'>Добавление студии</h1>
          <Col m={10}>
            <Card
              horizontal
              header={<CardTitle />}
              actions={[<a href='/'>Назад</a>]}
            >
              <form action='' id='form' onSubmit={this.onSubmit}>
                <TextInput
                  name='name'
                  onChange={this.onChange}
                  label='Название студии'
                  value={this.state.name}
                />
                <TextInput
                  name='address'
                  onChange={this.onChange}
                  label='Адрес'
                  value={this.state.address}
                />
                <TextInput
                  name='phone'
                  onChange={this.onChange}
                  label='Телефон'
                  value={this.state.phone}
                />
                <TextInput
                  name='email'
                  onChange={this.onChange}
                  label='Email'
                  value={this.state.email}
                />
                <Button type='submit' waves='light' onClick={this.submit}>
                  Создать
                </Button>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddVenue;
