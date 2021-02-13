import React, { Component } from "react";
import {
  format,
  getWeeksInMonth,
  startOfMonth,
  getDaysInMonth,
} from "date-fns";
import "./CalendarItselfWrapper.css";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

class CalendarItselfWrapper extends Component {
  dayOfWeekAppender = (arr) =>
    arr.map((day, numb) => (
      <th className="day-of-week-leter" key={numb}>
        {day}
      </th>
    ));

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
            <td className={day === 99 ? "day hidden" : "day"} key={numb}>
              <p className={day === currentDay ? "d cd" : "d"}>{day}</p>
            </td>
          ))}
        </tr>
      ));
  };

  render() {
    const { date } = this.props;
    return (
      <>
        <table className="day-of-week-leter-wrapper">
          <thead>
            <tr className="week">{this.dayOfWeekAppender(daysOfWeek)}</tr>
          </thead>
          <tbody>{this.numbersOfMonthAppender(date)}</tbody>
        </table>
      </>
    );
  }
}

export default CalendarItselfWrapper;
