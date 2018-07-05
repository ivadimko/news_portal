import { connect } from 'react-redux';
import { getArticlesList } from '@/reducers/articles';
import ListArticles from '../layout/ListArticles';

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
  ...state.articles,
});

const mapDispatchToProps = {
  getArticlesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListArticles);