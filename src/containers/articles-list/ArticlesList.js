import React, { Component } from 'react';
import SingleArticle from '@/components/single-article';
import './_articles-list.scss';

import list from './articles-list.json';

export default class ArticlesList extends Component {
  state = {
    // fetch articles from 3rd party api
    articlesList: list,
  }

  // .bind(this) into component, just for modals
  hideArticle() {
    this.setState(prev => ({ isHidden: !prev.isHidden }));
  }

  render() {
    const { articlesList } = this.state;
    return (
      <div className="articles-list">
        {articlesList.map(article => (
          <SingleArticle.withModal key={article.id}
                                   modalHeading="Do you want to delete this article?"
                                   className="articles-list__item"
                                   toggleButton={{
                                     className: 'button button_icon button_warning modal-toggle',
                                     icon: 'icon-tooltip-remove',
                                   }}
                                   acceptCallback={this.hideArticle}
                                   content={article}/>))}
      </div>
    );
  }
}
