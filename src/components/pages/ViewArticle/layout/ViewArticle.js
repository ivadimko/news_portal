import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ViewArticle extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    getArticleInfo: PropTypes.func.isRequired,
    currentArticle: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const { match, getArticleInfo } = this.props;
    const { slug } = match.params;
    return getArticleInfo(slug);
  }
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          Give me article!!!
        </div>
      </div>
    );
  }
}

export default withRouter(ViewArticle);
