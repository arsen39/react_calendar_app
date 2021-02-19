import React, { Component } from "react";
import { format } from "date-fns";
import "./MonthPart.css";
import CalendarItselfWrapper from "./CalendarItselfWrapper";
import leftImg from "./img/left.png";
import rightImg from "./img/right.png";

class MonthPart extends Component {
  backClickHandler = () => {
    const { monthsSelector } = this.props;
    monthsSelector(false);
  };

  forwardClickHandler = () => {
    const { monthsSelector } = this.props;
    monthsSelector(true);
  };

  render() {
    const { currentDate: date } = this.props;
    return (
      <>
        <div className="arrows-wrapper">
          <img
            className="arrow-img al"
            src={leftImg}
            alt="Back"
            onClick={this.backClickHandler}
          />
          <img
            className="arrow-img ar"
            src={rightImg}
            alt="Forward"
            onClick={this.forwardClickHandler}
          />
          <p className="month-part-elem month-year">
            {format(date, "MMMM").toUpperCase()} {format(date, "Y")}
          </p>
        </div>
        <div className="calendar-wrapper">
          <CalendarItselfWrapper date={date} isCurrent={this.props.isCurrent} />
        </div>
      </>
    );
  }
}

export default MonthPart;
