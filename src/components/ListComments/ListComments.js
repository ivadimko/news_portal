import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleComment from '@/components/ListComments/components/SingleComment';
import './_ListComments.scss';

export default class ListComments extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
    slug: PropTypes.string,
  };

  render() {
    const { list, slug } = this.props;
    return (
      <div className="comments-list">
        {list.map(comment => (
          <SingleComment key={comment.id}
                         acceptCallbackParams={{ id: comment.id }}
                         additionalCallbackParams={{ slug }}
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
