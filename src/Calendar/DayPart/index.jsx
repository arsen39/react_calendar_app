import React, { Component } from "react";
import {format} from 'date-fns';
import './DayPart.css';

class DayPart extends Component {
  
  render() {
    const {currentDate: date} = this.props;
    return (
      <>
        <p className="day-part-elem day-week">{format(date, "EEEE")}</p>
        <p className="day-part-elem day-month">{format(date, "d")}</p>
      </>
    );
  }
}

export default DayPart;
