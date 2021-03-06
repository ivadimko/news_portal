import { connect } from 'react-redux';
import { addNewArticle, getArticlesList } from '@/reducers/articles';
import ListArticles from '../layout/ListArticles';

const mapStateToProps = state => ({
  ...state.user,
  ...state.articles,
});

const mapDispatchToProps = {
  addNewArticle,
  getArticlesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListArticles);
