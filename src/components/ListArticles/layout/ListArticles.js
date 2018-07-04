import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { sortDatesDesc } from '@/helpers/helper';
import SingleArticle from '../components/SingleArticle';
import AddNewArticle from '../components/AddNewArticle';
import AddNewArticleForm from '../components/AddNewArticle/components/Form';
import '../_ListArticles.scss';


export default class ListArticles extends Component {
  constructor() {
    super();
    // refs
    this.formInstance = null;
  }

  static propTypes = {
    articles: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
    addNewArticle: PropTypes.func.isRequired,
    getArticlesList: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    children: PropTypes.element,
  }

  handleSubmit = ({ callback }) => {
    const { addNewArticle, getArticlesList } = this.props;
    this.formInstance.validateFields((err, values) => {
      if (!err) {
        this.formInstance.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        addNewArticle({ ...values })
          .then(() => getArticlesList())
          .then(() => callback());
      }
    });
  }

  componentDidMount() {
    const { getArticlesList } = this.props;
    return getArticlesList();
  }

  render() {
    const { articles, isLogged, children } = this.props;
    return (
      <div className="grid-x grid-margin-x align-bottom">
        {children && (
          <div className="cell auto">
            {children}
          </div>
        )}
        {isLogged && (
          <div className="cell large-3">
            <AddNewArticle
              modalHeading="Add new Article"
              className="articles-list__item"
              toggleButton={{
                className: 'button button_main modal-toggle',
                text: 'Add new article',
              }}
              contentElement={<AddNewArticleForm
                ref={(instance) => { this.formInstance = instance; }}
              />}
              acceptCallback={this.handleSubmit}
              acceptCallbackParams={{}}
              acceptText="Add Article"
              declineText="Cancel"
            />
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
