import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    activeText: PropTypes.string,
    isActive: PropTypes.bool,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
  }

  render() {
    const {
      callback, activeText, isActive, text, className,
    } = { ...this.props };
    return <button className={`button ${className}`} onClick={callback}>
      <span>
        {activeText && isActive ? activeText : text}
      </span>
    </button>;
  }
}
