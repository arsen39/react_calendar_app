import React, { Component } from "react";
import DayPart from "./DayPart";
import MonthPart from "./MonthPart";
import './Calendar.css';


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date (),
      selectedDate: new Date (),
      isCurrent: true,
    };
  }

  monthsSelector = (isForward) => {

  }

  render() {
    return (
      <>
        <div className='day-part calendar-part' >
          <DayPart currentDate={this.state.currentDate}/>
        </div>
        <div className='month-part calendar-part' >
          <MonthPart currentDate={this.state.currentDate} monthsSelector={this.monthsSelector}/>
        </div>
      </>
    );
  }
}

export default Calendar;
