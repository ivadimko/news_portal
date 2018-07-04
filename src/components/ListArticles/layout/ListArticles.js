import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { sortDatesDesc } from '@/helpers/helper';
import SingleArticle from '../components/SingleArticle';
import '../_ListArticles.scss';


class ListArticles extends Component {
  constructor() {
    super();
    // refs
    this.formInstance = null;
  }

  static propTypes = {
    articles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    getArticlesList: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { getArticlesList } = this.props;
    return getArticlesList();
  }

  render() {
    const { articles, isLogged } = this.props;
    return (
      <div className="grid-x grid-margin-x align-bottom align-right">
        {isLogged && (
          <div className="cell large-3 article-create-link">
            <NavLink to={{ pathname: '/new-article', state: { title: 'New Article' } }}>Add new article</NavLink>
          </div>
        )}
        <div className="cell">
          <div className="articles-list">
            {articles.sort(sortDatesDesc).map(article => (
              <SingleArticle key={article._id}
                             acceptCallbackParams={{ slug: article.slug }}
                             modalHeading="Do you want to delete this article?"
                             className="articles-list__item"
                             toggleButton={{
                               className: 'button button_icon button_warning modal-toggle',
                               icon: 'icon-tooltip-remove',
                             }}
                             content={article}/>))}
          </div>
        </div>

      </div>
    );
  }
}

export default ListArticles;
