import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleComment from '@/components/ListComments/components/SingleComment';
import './_ListComments.scss';

export default class ListComments extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    articleId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  };

  render() {
    const { list, articleId } = this.props;
    return (
      <div className="comments-list">
        {list.map(comment => (
          <SingleComment key={comment.id}
                         acceptCallbackParams={{ articleId, id: comment.id }}
                         modalHeading="Do you want to delete this comment?"
                         toggleButton={{
                           className: 'button button_icon button_warning modal-toggle',
                           icon: 'icon-tooltip-remove',
                         }}
                         className="comments-list__item"
                         content={comment}/>))}
      </div>
    );
  }
}
