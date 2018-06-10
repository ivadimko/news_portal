import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Date from '@/components/date';
import CommentsList from '@/containers/comments-list';
import Button from '@/components/button';
import './_single-article.scss';

export default class SingleArticle extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  state = {
    isOpened: false,
    isCommentsShown: false,
  };

  toggleOpen = () => {
    const { isOpened } = { ...this.state };
    this.setState({
      isOpened: !isOpened,
      isCommentsShown: false,
    });
  };

  toggleComments = () => {
    const { isCommentsShown } = { ...this.state };
    this.setState({ isCommentsShown: !isCommentsShown });
  };

  render() {
    const { className, content } = { ...this.props };
    const {
      title, author, date, text, comments,
    } = { ...content };
    const { isOpened, isCommentsShown } = { ...this.state };
    return <article className={classNames(['article', className])}>
      <header className="article__top">
        <h4 title={title}>{title}</h4>
        <div className="article__info">
          <p className="author">{author}</p>
          <Date className="date" date={date} format={'DD[.]MM[.]YYYY'}/>
          <Button
            activeText="Hide Content"
            className="button_main"
            text="Explore More"
            isActive={isOpened}
            callback={this.toggleOpen}
          />
        </div>
      </header>
      {isOpened &&
      <div className="article__main">
        <div className="article__body">
          <p>{text}</p>
        </div>
        <footer className="article__footer">
          <Date className="date" date={date}/>
          {!!comments.length &&
          <div className="article__comments-toggle">
            <p>
              {/*
              plural form for comments count can be replaced with i18n module but not now :)
              */}
              <b>{comments.length}</b> Comment{comments.length > 1 ? 's' : ''}
            </p>
            <Button
              activeText="(Hide All)"
              className="button_sub"
              text="(Show All)"
              isActive={isCommentsShown}
              callback={this.toggleComments}
            />
          </div>
          }
          <Button
            activeText="Hide Content"
            className="button_sub"
            text="Explore More"
            isActive={isOpened}
            callback={this.toggleOpen}
          />
        </footer>
      </div>
      }
      {isOpened && isCommentsShown &&
      <div className="article__comments">
        <CommentsList list={comments}/>
      </div>
      }
    </article>;
  }
}
