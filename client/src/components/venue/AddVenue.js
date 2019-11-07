import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, TextInput, Card, Button, Icon } from 'react-materialize';
import CardTitle from './CardTitle';
import './AddVenue.css';
// import { sendTextAC } from '../redux/actions';
import {
  getVenuesAC,
  requestVenuesSuccessAC,
  addVenueAC
} from '../../actions/venueActions';

class AddVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      address: null,
      phone: null,
      web: null,
      img: '#',
      from: null,
      to: null,
      capacity: null,
      price: null
    };
  }
  componentDidMount() {
    // this.props.getVenues();
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = async e => {
    e.preventDefault();
    this.props.addVenue(this.state);
    console.log(123, this.state);

    // const resp = await fetch('/api/venues/new', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(this.state)
    // });
    // const venues = await resp.json();
    this.setState({
      name: null,
      address: null,
      phone: null,
      web: null,
      img: '#',
      from: null,
      to: null,
      capacity: null,
      price: null
    });
    console.log(this.state);
  };

  render() {
    // console.log(7, this.props);
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
              <form action='' id='form' onSubmit={this.submit}>
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
                  name='web'
                  onChange={this.onChange}
                  label='Web'
                  value={this.state.web}
                />
                <TextInput
                  name='from'
                  onChange={this.onChange}
                  label='from'
                  value={this.state.from}
                />
                <TextInput
                  name='to'
                  onChange={this.onChange}
                  label='to'
                  value={this.state.to}
                />
                <TextInput
                  name='capacity'
                  onChange={this.onChange}
                  label='capacity'
                  value={this.state.capacity}
                />
                <TextInput
                  name='price'
                  onChange={this.onChange}
                  label='price'
                  value={this.state.price}
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

// function mapStateToProps(state) {
//   return {
//     venues: state.venues,
//     loading: state.loading,
//     error: state.error,
//     msg: state.msg,
//     status: state.status
//   };
// }

<<<<<<< HEAD
function mapDispatchToProps(dispatch) {
  return {
    addVenue: data => dispatch(addVenueAC(data))
  };
}
=======
// function mapDispatchToProps(dispatch) {
//   return {
//     getVenues: () => dispatch(getVenuesAC())
//   };
// }
>>>>>>> dev

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AddVenue);
