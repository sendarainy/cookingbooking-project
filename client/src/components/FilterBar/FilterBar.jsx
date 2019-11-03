import React, { Component } from 'react'
import './FilterBar-style.css'
import { Button, TimePicker, Select, DatePicker, Range } from 'react-materialize'

export default class FilterBar extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      time: ''
    }
  }

  // componentDidMount = async () => {
  //   let resp = await fetch('/', {
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   })
  //   let json = await resp.json()
  //   console.log(json);
  // }

  render() {
    return (
      <div className='filterBar'>

        {/* <Range min="0" max="100" name="points" name='lalala'/> */}

        <DatePicker className='date' value='Select Date' 
        options={{
          autoClose: true,
          format: 'mmmm dd, yyyy',
          // setDefaultDate: true,
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
            <Select value="number">
              <option value="1">
              1
              </option>
              <option value="2">
              2
              </option>
              <option value="3">
              3
              </option>
            </Select>
        <Button className='button'>Search</Button>
      </div>
    )
  }
}