import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Date from '@/components/date';

export default class Comments extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
  }

  render() {
    const { author, text, date } = { ...this.props.content };
    const { className } = { ...this.props };
    return <div className={`comment ${className}`}>
      <div className={'comment__top'}>
        <p>{author}</p>
        <Date date={date} format={'DD[.]MM[.]YYYY'}/>
      </div>
      <div className="comment__body">
        <p>{text}</p>
      </div>
    </div>;
  }
}
