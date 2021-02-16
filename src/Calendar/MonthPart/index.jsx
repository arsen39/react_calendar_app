import React, { Component } from "react";
import { format, getWeeksInMonth } from "date-fns";
import "./MonthPart.css";
import CalendarItselfWrapper from "./CalendarItselfWrapper";



class MonthPart extends Component {
  
  render() {
    const { currentDate: date, monthsSelector } = this.props;
    return (
      <>
        <p className="month-part-elem month-year">
          {format(date, "MMMM").toUpperCase()} {format(date, "Y")}
        </p>
        <div className="calendar-wrapper">
          <CalendarItselfWrapper date={date}/>
        </div>
      </>
    );
  }
}

export default MonthPart;
