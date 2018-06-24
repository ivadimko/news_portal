import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_Button.scss';

const Button = (props) => {
  const {
    callback, activeText, isActive, text, className, icon,
  } = props;
  return (
    <button className={classNames(['button', className])} onClick={callback}>
      <span>
        {activeText && isActive ? activeText : text}
        {icon && (
          <i className={icon}/>
        )}
      </span>
    </button>
  );
};

Button.propTypes = {
  activeText: PropTypes.string,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  callback: PropTypes.func.isRequired,
};

Button.defaultProps = {
  activeText: '',
  isActive: false,
  className: '',
  text: '',
  icon: '',
};

export default Button;
