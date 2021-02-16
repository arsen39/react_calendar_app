import React, { Component } from "react";
import "./CalendarItselfWrapper.css";
import DaysOfMonth from "./DaysOfMonth";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

class CalendarItselfWrapper extends Component {
  dayOfWeekAppender = (arr) =>
    arr.map((day, numb) => (
      <th className="day-of-week-leter" key={numb}>
        {day}
      </th>
    ));

  

  render() {
    const { date } = this.props;
    return (
      <>
        <table className="day-of-week-leter-wrapper">
          <thead>
            <tr className="week">{this.dayOfWeekAppender(daysOfWeek)}</tr>
          </thead>
          <DaysOfMonth currentDate={date}/>
        </table>
      </>
    );
  }
}

export default CalendarItselfWrapper;
