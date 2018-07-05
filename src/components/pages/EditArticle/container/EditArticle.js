import { connect } from 'react-redux';
import { editArticle, getArticlesList } from '@/reducers/articles';
import EditArticle from '../layout/EditArticle';

const mapStateToProps = null;

const mapDispatchToProps = {
  editArticle,
  getArticlesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditArticle);
