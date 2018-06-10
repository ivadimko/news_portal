import React, { Component } from 'react';
import SingleArticle from '@/components/single-article';


import list from './articles-list.json';

export default class ArticlesList extends Component {
  constructor() {
    super();
    // fetch articles from 3rd party api
    this.list = list;
  }
  render() {
    return <div className="articles-list">
      {this.list.map((article, i) => <SingleArticle key={i} className={'articles-list__item'} content={article}/>)}
    </div>;
  }
}
