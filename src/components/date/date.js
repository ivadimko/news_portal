import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Date extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    className: PropTypes.string,
    format: PropTypes.string,
  }

  static defaultProps = {
    format: 'MMMM Do YYYY',
  }

  render() {
    const { date, format, className } = { ...this.props };
    return <time className={className} dateTime={moment(date).format('YYYY[-]MM[-]DD')}>{moment(date).format(format)}</time>;
  }
}
