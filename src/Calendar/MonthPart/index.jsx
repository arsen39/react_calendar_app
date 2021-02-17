import React, { Component } from "react";
import {format} from "date-fns";
import "./MonthPart.css";
import CalendarItselfWrapper from "./CalendarItselfWrapper";
import leftImg from './img/left.png';
import rightImg from './img/right.png';



class MonthPart extends Component {
  

  backClickHandler = () => {
    const {monthsSelector} = this.props;
    monthsSelector(false);
  };

  forwardClickHandler = () => {
    const {monthsSelector} = this.props;
    monthsSelector(true);
  };
  
  render() {
    const { currentDate: date} = this.props;
    return (
      <>
        <p className="month-part-elem month-year">
          {format(date, "MMMM").toUpperCase()} {format(date, "Y")}
        </p>
        <div className="calendar-wrapper">
          <img className="arrow-img al" src={leftImg} alt="Back" onClick={this.backClickHandler}/>
          <CalendarItselfWrapper date={date} isCurrent={this.props.isCurrent}/>
          <img className="arrow-img ar" src={rightImg} alt="Forward" onClick={this.forwardClickHandler} />
        </div>
      </>
    );
  }
}

export default MonthPart;
