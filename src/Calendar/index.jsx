import React, { Component } from "react";
import DayPart from "./DayPart";
import MonthPart from "./MonthPart";
import "./Calendar.css";
import { addMonths } from "date-fns";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      selectedDate: new Date(),
      isCurrent: true,
    };
  }

  monthsSelector = (isForward) => {
    const { currentDate, selectedDate} = this.state;
    const newDate = new Date(selectedDate);
    if (isForward) {
      newDate.setTime(addMonths(selectedDate,1));
      newDate.setDate(15);
    } else {
      newDate.setTime(addMonths(selectedDate,-1));
      newDate.setDate(15);
    }
    this.setState({
      selectedDate: newDate,
      isCurrent: false,
    });

    if (
      currentDate.getMonth() === newDate.getMonth() &&
      currentDate.getYear() === newDate.getYear()
    ) {
      this.setState({
        selectedDate: currentDate,
        isCurrent: true,
      });
    }
  };

  render() {
    return (
      <>
        <div className="day-part calendar-part">
          <DayPart currentDate={this.state.currentDate} />
        </div>
        <div className="month-part calendar-part">
          <MonthPart
            currentDate={this.state.selectedDate}
            isCurrent={this.state.isCurrent}
            monthsSelector={this.monthsSelector}
          />
        </div>
      </>
    );
  }
}

export default Calendar;
