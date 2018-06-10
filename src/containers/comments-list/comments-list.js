import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleComment from '@/components/single-comment';

export default class CommentsList extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired,
  }

  render() {
    const { list } = { ...this.props };
    return <div className={'comments-list'}>
  {list.map((item, i) => <SingleComment key={i} className={'comments-list__item'} content={item}/>)}
</div>;
  }
}
