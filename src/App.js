import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-regular-svg-icons';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Moment from 'react-moment';

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    //const sdate = JSON.stringify(this.state.startDate);
    //const edate = JSON.stringify(this.state.endDate);

    
    return (
      <div className="App">
        {/* <Moment>{sdate} -- {edate}</Moment> */}
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDatePlaceholderText="From"
          endDatePlaceholderText="To"
          showClearDates={true}//
          showDefaultInputIcon={true}//
          keepOpenOnDateSelect={true}//
          readOnly={true}//
          withPortal={true}//
          customArrowIcon={<FontAwesomeIcon icon={faGem} />}//
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
        />
      </div>
    );
  }
}

export default App;