import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleComment from '@/components/single-comment';
import './_comments-list.scss';

export default class CommentsList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  };

  // .bind(this) into component, just for modals
  hideComment() {
    this.setState(prev => ({ isHidden: !prev.isHidden }));
  }

  render() {
    const { list } = this.props;
    return (
      <div className="comments-list">
        {list.map(comment => (
          <SingleComment.withModal key={comment.id}
                                   modalHeading="Do you want to delete this comment?"
                                   toggleButton={{
                                     className: 'button button_icon button_warning modal-toggle',
                                     icon: 'icon-tooltip-remove',
                                   }}
                                   className="comments-list__item"
                                   acceptCallback={this.hideComment}
                                   content={comment}/>))}
      </div>
    );
  }
}
