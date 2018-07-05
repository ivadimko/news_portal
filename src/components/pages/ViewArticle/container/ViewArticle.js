import { getArticleInfo } from '@/reducers/articles';
import { connect } from 'react-redux';
import ViewArticle from '../layout/ViewArticle';

const mapStateToProps = state => ({
  currentArticle: state.articles.currentArticle,
});

const mapDispatchToProps = {
  getArticleInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewArticle);
