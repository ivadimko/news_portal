import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_button.scss';

const Button = (props) => {
  const {
    callback, activeText, isActive, text, className,
  } = props;
  return (
    <button className={classNames(['button', className])} onClick={callback}>
      <span>
        {activeText && isActive ? activeText : text}
      </span>
    </button>
  );
};

Button.propTypes = {
  activeText: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Button;
