import React, { Component } from 'react';
import ArticlesList from '@/containers/articles-list';
import './_home.scss';

export default class Home extends Component {
  render() {
    return <div className="page">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <div className="page__title">
              <h1>News Portal</h1>
            </div>
          </div>
          <div className="cell">
            <ArticlesList/>
          </div>
        </div>
      </div>
    </div>;
  }
}
