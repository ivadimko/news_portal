import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Date from '@/components/date';
import './_single-comment.scss';

const Comment = (props) => {
  const { className, content } = props;
  const { author, text, date } = content;
  return (
    <div className={classNames(['comment', className])}>
      <div className="comment__top">
        <p>{author}</p>
        <Date date={date} format={'DD[.]MM[.]YYYY'}/>
      </div>
      <div className="comment__body">
        <p>{text}</p>
      </div>
    </div>
  );
};

Comment.propTypes = {
  content: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default Comment;
