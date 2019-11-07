import React, { Component } from 'react'
import './FilterBar-style.css'
import { Button, TimePicker, Select, DatePicker, Checkbox } from 'react-materialize'
import { filterReservations } from '../../actions/reservationActions'
import { filterVenues, cancelFilter } from '../../actions/venueActions'
import { connect } from 'react-redux'
class FilterBar extends Component {
  state = {
    date: {
      date: null,
      time: null
    },
    options: {
      pastry: false,
      cold: false,
      gastro: false
    },
    parsedDate: null,
    hours: null,
    price: null
  }

  onChangeOptions = async e => {
    await this.setState({
      options: {
        ...this.state.options,
        [e.target.className]: !this.state.options[e.target.className]
      }
    });
    const { options } = this.state
    this.props.filterVenues({ options })

  };
  handleChangePrice = (e) => {
    this.handleChange(e)
    const price = e.target.value
    if (price) this.props.filterVenues({ price }) 
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value || null
    })
  }

  filterOnDateFilled = () => {
    if (this.state.date.date && this.state.date.time) {
      this.props.filterReservations(this.state.date.date)
    }
  }
  handleChangeDate = (date) => {
    this.setState({
      ...this.state,
      date: {
        date: date,
        time: this.state.date.time
      }
    })
    this.filterOnDateFilled()
  }
  handleChangeTime = (time) => {
    this.setState({ 
      ...this.state, 
      date: {
        date: this.state.date.date,
        time: time
      }
    });
    this.filterOnDateFilled()
  }
  render() {
    return (
      <div className='filterBar'>
        <DatePicker className='date' value='Дата'
        options={{
          autoClose: true,
          format: 'mmmm dd, yyyy'
        }}
        onChange={(date) => this.handleChangeDate(date)}
        />
        <TimePicker className='time' value='Время'
        onChange={(time) => this.handleChangeTime(time)}
        />
        
        <Select name='price' onChange={this.handleChangePrice}>
          <option value='' disabled>Цена</option>
          <option value="1000">До 1000</option>
          <option value="2000">До 2000</option>
          <option value="3000">До 3000</option>
        </Select>
        <div className='checkContainer' style={{ display: 'flex', alignItems: 'center'}}>
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
        <Button onClick={this.props.cancelFilter} className='button red' tooltip='Сбросить фильтр'>X</Button>
      </div>
    )
  }
}

export default connect(null, { filterReservations, filterVenues, cancelFilter })(FilterBar)