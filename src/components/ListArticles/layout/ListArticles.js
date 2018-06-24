import React, { Component, Fragment } from 'react';
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
  }

  handleSubmit = ({ callback }) => {
    const { addNewArticle } = this.props;
    this.formInstance.validateFields((err, values) => {
      if (!err) {
        this.formInstance.resetFields();
        console.log('Received values of form: ', values); // eslint-disable-line no-console
        addNewArticle(values);
        callback();
      }
    });
  }

  render() {
    const { articles } = this.props;
    return (
      <Fragment>
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
        <div className="articles-list">
          {articles.sort(sortDatesDesc).map(article => (
            <SingleArticle key={article.id}
                           acceptCallbackParams={{ id: article.id }}
                           modalHeading="Do you want to delete this article?"
                           className="articles-list__item"
                           toggleButton={{
                             className: 'button button_icon button_warning modal-toggle',
                             icon: 'icon-tooltip-remove',
                           }}
                           content={article}/>))}
        </div>
      </Fragment>
    );
  }
}
