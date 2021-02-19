import React, { Component } from "react";
import PropTypes from 'prop-types';
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

DayPart.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
}

export default DayPart;
