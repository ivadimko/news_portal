import React, { Component } from 'react';
import SingleArticle from '@/components/single-article';
import './_articles-list.scss';

import list from './articles-list.json';

export default class ArticlesList extends Component {
  state = {
    // fetch articles from 3rd party api
    articlesList: list,
  }

  render() {
    const { articlesList } = this.state;
    return (
      <div className="articles-list">
        {articlesList.map(article => <SingleArticle key={article.id}
                                                    className="articles-list__item"
                                                    content={article}/>)}
      </div>
    );
  }
}
