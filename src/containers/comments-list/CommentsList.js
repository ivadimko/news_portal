import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleComment from '@/components/single-comment';
import './_comments-list.scss';

export default class CommentsList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  render() {
    const { list } = this.props;
    return <div className="comments-list">
      {list.map(comment => <SingleComment key={comment.id} className="comments-list__item" content={comment}/>)}
    </div>;
  }
}
