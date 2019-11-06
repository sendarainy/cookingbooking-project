import React, { Component } from 'react'
import './FilterBar-style.css'
import { Button, TimePicker, Select, DatePicker } from 'react-materialize'
import { filterVenues } from '../../actions/venueActions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
class FilterBar extends Component {
  state = {
    date: {
      date: '',
      time: ''
    },
    hours: '',
    price: ''
  }
  static propTypes = {
    filterVenues: PropTypes.func.isRequired
  }
  componentDidUpdate = () => {
    this.props.filterVenues(this.state.price)
  }
  render() {
    return (
      <div className='filterBar'>

        <DatePicker className='date' value='Select Date' 
        options={{
          autoClose: true,
          format: 'mmmm dd, yyyy'
        }}
        onChange={ (date) => {
          this.setState({ ...this.state, 
            date: {
              date: date,
              time: this.state.date.time
            }
          });
          console.log(this.state)
        }}
        />

        <TimePicker className='date' value='Select Time' 
        options={{
          twelveHour: false,
          autoClose: true,
          format: 'hh:mm'
        }}
        onChange={ (time) => {
          this.setState({ ...this.state, 
            date: {
              date: this.state.date.date,
              time: time
            }
          });
          console.log(this.state)
        }}
        />

        <Select name='hours' onChange={ (event) => {
          this.setState({
            hours: event.target.value
          });
          console.log(this.state);
        }}>
          <option>Часы</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </Select>
        
        <Select name='price' onChange={ (event) => {
          this.setState({
            price: event.target.value
          });
        }}>
          <option>
          Price
          </option>
          <option value="1000">
          До 1000
          </option>
          <option value="2000">
          До 2000
          </option>
          <option value="3000">
          До 3000
          </option>
        </Select>

        <Button className='button'>Search</Button>
      </div>
    )
  }
}

export default connect(null, { filterVenues })(FilterBar)