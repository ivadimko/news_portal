import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Date = (props) => {
  const { date, format, className } = props;
  return (
    <time className={className} dateTime={moment(date).format('YYYY[-]MM[-]DD')}>{moment(date).format(format)}</time>
  );
};

Date.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
  format: PropTypes.string,
};

Date.defaultProps = {
  format: 'MMMM Do YYYY',
};

export default Date;
