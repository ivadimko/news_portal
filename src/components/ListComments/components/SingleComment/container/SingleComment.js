import { connect } from 'react-redux';
import { getArticleInfo, removeComment } from '@/reducers/articles';
import SingleComment from '../layout/SingleComment';

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  acceptCallback: removeComment,
  additionalCallback: getArticleInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleComment.withModal);
