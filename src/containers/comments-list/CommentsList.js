import React from 'react';
import PropTypes from 'prop-types';
import SingleComment from '@/components/single-comment';
import './_comments-list.scss';

const CommentsList = (props) => {
  const { list } = props;
  return (
    <div className="comments-list">
      {list.map(comment => <SingleComment key={comment.id}
                                          className="comments-list__item"
                                          content={comment}/>)}
    </div>
  );
};

CommentsList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default CommentsList;
