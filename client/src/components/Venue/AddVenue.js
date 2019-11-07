import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  TextInput,
  Card,
  Button,
  Icon,
  Checkbox
} from 'react-materialize';
import CardTitle from './CardTitle';
import './AddVenue.css';
// import { sendTextAC } from '../redux/actions';
import { addVenueAC } from '../../actions/venueActions';

class AddVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone: '',
      web: '',
      img: '#',
      from: '',
      to: '',
      capacity: '',
      price: '',
      options: {
        pastry: false,
        gastro: false,
        cold: false
      },
      checked: 'checked'
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
  // Choose options
  onChangeOptions = e => {
    this.setState({
      options: {
        ...this.state.options,
        [e.target.className]: !this.state.options[e.target.className]
      }
    });
    console.log(this.state);
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
      name: '',
      address: '',
      phone: '',
      web: '',
      img: '#',
      from: '',
      to: '',
      capacity: '',
      price: '',
      options: {
        pastry: false,
        gastro: false,
        cold: false
      }
    });
    console.log(80, this.state);
  };

  render() {
    console.log(84, this.state);
    const checked = 'checked';
    return (
      <div className='add-venue-main'>
        <form onSubmit={this.submit}>
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
          <div className='checkContainer'>
            <div>
              <Checkbox
                className='pastry'
                onChange={this.onChangeOptions}
                value='false'
                label='Кондитерский цех'
                checked={this.state.options.pastry}
              />
            </div>
            <div>
              <Checkbox
                className='gastro'
                onChange={this.onChangeOptions}
                value='false'
                label='Кулинарный цех'
                checked={this.state.options.gastro}
              />
            </div>
            <div>
              <Checkbox
                className='cold'
                onChange={this.onChangeOptions}
                value='false'
                label='Холодный цех'
                checked={this.state.options.cold}
              />
            </div>
          </div>
          <Button type='submit' waves='light'>
            Создать
          </Button>
        </form>
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
    addVenue: data => dispatch(addVenueAC(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddVenue);
