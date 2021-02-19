import React, { Component } from "react";
import Day from "./Day";
import {
  format,
  getWeeksInMonth,
  startOfMonth,
  getDaysInMonth,
} from "date-fns";

class DaysOfMonth extends Component {
  numbersOfMonthAppender = (date) => {
    const currentDay = +format(date, "d");
    const numbOfWeeks = getWeeksInMonth(date);
    const daysInMonth = getDaysInMonth(date);
    const firstDayOfMonth =
      +format(startOfMonth(date), "i") === 7
        ? 0
        : +format(startOfMonth(date), "i");

    let dayCounter = 1;
    return new Array(numbOfWeeks)
      .fill(new Array(7).fill(99))
      .map((iWeek, nWeek) =>
        iWeek.map((iDay, nDay) => {
          if (
            (nWeek === 0 && nDay >= firstDayOfMonth) ||
            (nWeek > 0 && dayCounter <= daysInMonth)
          ) {
            return dayCounter++;
          } else {
            return iDay;
          }
        })
      )
      .map((week, numb) => (
        <tr className="week" key={numb}>
          {week.map((day, numb) => (
            <Day day={day} key={numb} currentDay={currentDay} isCurrent={this.props.isCurrent}/>
          ))}
        </tr>
      ));
  };
  render() {
    const {currentDate} = this.props;
    return <tbody>{this.numbersOfMonthAppender(currentDate)}</tbody>;
  }
}

export default DaysOfMonth;
