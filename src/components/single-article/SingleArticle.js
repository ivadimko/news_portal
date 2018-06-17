import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shave from 'shave';
import helper from '@/scripts/utils/helper';
import Date from '@/components/date';
import CommentsList from '@/containers/comments-list';
import Button from '@/components/button';
import './_single-article.scss';

export default class SingleArticle extends Component {
  constructor() {
    super();
    // refs
    this.text = null;

    // state
    this.state = {
      isOpened: false,
      isCommentsShown: false,
    };
  }

  static propTypes = {
    previewRows: PropTypes.number,
    content: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    previewRows: 2,
  }

  toggleOpen = () => {
    const { isOpened } = this.state;
    this.setState({
      isOpened: !isOpened,
      isCommentsShown: false,
    }, this.calculateMinHeight);
  };

  toggleComments = () => {
    const { isCommentsShown } = this.state;
    this.setState({ isCommentsShown: !isCommentsShown });
  };

  render() {
    const { className, content } = this.props;
    const {
      title, author, date, text, comments,
    } = content;
    const { isOpened, isCommentsShown } = this.state;
    return (
      <article className={classNames(['article', className])}>
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
        <div className="article__main">
          <div ref={(el) => { this.text = el; }} className="article__body">
            <p>{text}</p>
          </div>
          {isOpened &&
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
          }
        </div>
        {isOpened && isCommentsShown &&
        <div className="article__comments">
          <CommentsList list={comments}/>
        </div>
        }
      </article>
    );
  }

  calculateMinHeight = () => {
    const { previewRows } = this.props;
    const { isOpened } = this.state;
    const indentTop = parseInt(helper.getStyle(this.text, 'padding-top'), 10);
    const indentBottom = parseInt(helper.getStyle(this.text, 'padding-bottom'), 10);
    const lineHeight = parseInt(helper.getStyle(this.text, 'line-height'), 10);

    const minHeight = isOpened ? Infinity : indentBottom + indentTop + (previewRows * lineHeight);
    shave(this.text, minHeight);
  }

  componentDidMount() {
    this.calculateMinHeight();
    window.addEventListener('resize', this.calculateMinHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateMinHeight);
  }
}
