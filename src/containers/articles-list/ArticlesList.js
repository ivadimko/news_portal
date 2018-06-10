import React, { Component } from 'react';
import SingleArticle from '@/components/single-article';
import './_articles-list.scss';

import list from './articles-list.json';

export default class ArticlesList extends Component {
  constructor() {
    super();
    // fetch articles from 3rd party api
    this.list = list;
  }
  render() {
    return <div className="articles-list">
      {this.list.map(article => <SingleArticle key={article.id} className="articles-list__item" content={article}/>)}
    </div>;
  }
}
