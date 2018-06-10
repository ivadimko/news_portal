import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Date from '@/components/date';
import './_single-comment.scss';

export default class Comments extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
  }

  render() {
    const { className, content } = { ...this.props };
    const { author, text, date } = { ...content };
    return <div className={classNames(['comment', className])}>
      <div className="comment__top">
        <p>{author}</p>
        <Date date={date} format={'DD[.]MM[.]YYYY'}/>
      </div>
      <div className="comment__body">
        <p>{text}</p>
      </div>
    </div>;
  }
}
