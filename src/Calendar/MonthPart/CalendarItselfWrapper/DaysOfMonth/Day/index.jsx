import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

class Day extends Component {
  render() {
    const { day, currentDay, isCurrent} = this.props;
    const classesCSS = classNames("day", {
      hidden: day === null,
      cd: day === currentDay&&isCurrent,
    });
    return (
      <td className={classesCSS}>
        <p className={'d'}>{day}</p>
      </td>
    );
  }
}

Day.propTypes = {
  day: PropTypes.number,
  currentDay: PropTypes.instanceOf(Date),
  isCurrent: PropTypes.bool,
}

export default Day;
