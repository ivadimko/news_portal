import { connect } from 'react-redux';
import { addNewArticle } from '@/reducers/articles';
import ListArticles from '../layout/ListArticles';

const mapStateToProps = state => ({
  ...state.articles,
});

const mapDispatchToProps = {
  addNewArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListArticles);
