import React, { Component, Fragment } from 'react';
import { Modal, Button, Icon } from 'react-materialize'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'
import axios from 'axios'

class BookingModal extends Component {
  state = {
    date: null,
    isOpen: false
  };
  toggleModal = e => {
    if (!this.props.user) {
      return alert('Пожалуйста, залогиньтесь!');
    }
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleSubmit = async e => {
    e.preventDefault();
    const body = {
      userId: this.props.user._id,
      venueId: this.props.venueId,
      date: this.state.date
    };
    const headers = {
      'Content-Type': 'application/json'
    };
    await axios.post('api/reservations/new', body, headers);
  };
  handleDateChange = date => {
    this.setState({
      date: date[0]
    });
  };
  render() {
    return (
      <Fragment>
        <Button floating large 
        icon={<Icon>add</Icon>}
        onClick={this.toggleModal} 
        className=''
        waves='light'
        tooltip='Забронировать' />
        <Modal header='Забронировать' open={this.state.isOpen}>
          <form onSubmit={this.handleSubmit}>
            <Flatpickr
              data-enable-time
              value={this.state.date}
              onChange={this.handleDateChange}
            />
            <Button>Забронировать</Button>
          </form>
        </Modal>
      </Fragment>
    );
  }
}

export default BookingModal;
