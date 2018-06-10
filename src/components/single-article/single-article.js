import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Date from '@/components/date';
import CommentsList from '@/containers/comments-list';
import Button from '@/components/button';

export default class SingleArticle extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  state = {
    isOpened: false,
    isCommentsShown: false,
    hasComments: !!this.props.content.comments.length,
  };

  comments() {
    const { hasComments, isCommentsShown } = { ...this.state };
    const commentsCount = this.props.content.comments.length;
    if (hasComments) {
      // plural form for comments count can be replaced with i18n module but not now :)
      return <div className="article__comments-toggle">
        <p>
          <b>{commentsCount}</b> Comment{commentsCount > 1 ? 's' : ''}
        </p>
        <Button
          activeText={'(Hide All)'}
          text={'(Show All)'}
          isActive={isCommentsShown}
          className={'button_sub'}
          callback={this.toggleComments}
        />
      </div>;
    }
    return null;
  }

  toggleOpen = () => {
    const { isOpened } = { ...this.state };
    this.setState({ isOpened: !isOpened });
  };

  toggleComments = () => {
    const { isCommentsShown } = { ...this.state };
    this.setState({ isCommentsShown: !isCommentsShown });
  };

  render() {
    const {
      title, author, date, text, comments,
    } = { ...this.props.content };
    const { className } = { ...this.props };
    const { isOpened, isCommentsShown } = { ...this.state };
    return <article className={`article ${className}`}>
      <header className="article__top">
        <h4 title={title}>{title}</h4>
        <div className="article__info">
          <p className={'author'}>{author}</p>
          <Date className={'date'} date={date} format={'DD[.]MM[.]YYYY'}/>
          <Button
            activeText={'Hide Content'}
            className={'button_main'}
            text={'Explore More'}
            isActive={isOpened}
            callback={this.toggleOpen}
          />
        </div>
      </header>
      <div className={`article__body ${isOpened ? '' : 'is-hidden'}`}>
        <p>{text}</p>
      </div>
      <footer className={`article__footer ${isOpened ? '' : 'is-hidden'}`}>
        <Date className={'date'} date={date}/>
        {this.comments()}
        <Button
          activeText={'Hide Content'}
          className={'button_sub'}
          text={'Explore More'}
          isActive={isOpened}
          callback={this.toggleOpen}
        />
      </footer>
      <div className={`article__comments ${isCommentsShown && isOpened ? '' : 'is-hidden'}`}>
        <CommentsList list={comments}/>
      </div>
    </article>;
  }
}
