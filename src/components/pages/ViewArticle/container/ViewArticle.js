import { getArticleInfo, addNewComment } from '@/reducers/articles';
import { connect } from 'react-redux';
import ViewArticle from '../layout/ViewArticle';

const mapStateToProps = state => ({
  currentArticle: state.articles.currentArticle,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  getArticleInfo,
  addNewComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewArticle);
