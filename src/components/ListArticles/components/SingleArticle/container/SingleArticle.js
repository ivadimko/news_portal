import { connect } from 'react-redux';
import { removeArticle, getArticlesList } from '@/reducers/articles';
import SingleArticle from '../layout/SingleArticle';

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  acceptCallback: removeArticle,
  additionalCallback: getArticlesList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArticle.withModal);
