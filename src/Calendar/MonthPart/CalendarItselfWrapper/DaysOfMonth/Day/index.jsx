import React, { Component } from "react";
import classNames from "classnames";

class Day extends Component {
  render() {
    const { day, numb, currentDay } = this.props;
    const classesCSS = classNames("day", {
      hidden: day === 99,
      cd: day === currentDay,
    });
    return (
      <td className={classesCSS} key={numb}>
        <p className={'d'}>{day}</p>
      </td>
    );
  }
}

export default Day;
