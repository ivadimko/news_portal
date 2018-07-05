import { connect } from 'react-redux';
import { addNewArticle, getArticlesList } from '@/reducers/articles';
import AddNewArticle from '../layout/AddNewArticle';

const mapStateToProps = null;

const mapDispatchToProps = {
  addNewArticle,
  getArticlesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewArticle);
