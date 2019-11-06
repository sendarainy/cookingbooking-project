import React, { Component } from 'react'
import './FilterBar-style.css'
import { Button, TimePicker, Select, DatePicker } from 'react-materialize'
import { filterVenues } from '../../actions/venueActions'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
class FilterBar extends Component {
  state = {
    date: '',
    price: ''
  }
  static propTypes = {
    filterVenues: PropTypes.func.isRequired
  }
  componentDidUpdate = () => {
    const price = +this.state.price
    this.props.filterVenues({ price })
  }
  render() {
    return (
      <div className='filterBar'>
        {/* <Range min="0" max="100" name="points" name='lalala'/> */}
        <DatePicker className='date' value='Select Date' 
        options={{
          autoClose: true,
          format: 'mmmm dd, yyyy'
        }}
        onChange={ (date) => {
          this.setState({
            date: date
          });
          console.log(this.state)
        }}
        />
        <TimePicker className='date' value='Select Time' 
        options={{
          autoClose: true,
        }}
        onChange={ (time) => {
          this.setState({
            time: time
          });
          console.log(this.state)
        }}
        />

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