import { connect } from 'react-redux';
import { removeComment } from '@/reducers/articles';
import SingleArticle from '../layout/SingleComment';

const mapStateToProps = state => ({
  ...state.app,
});

const mapDispatchToProps = {
  acceptCallback: removeComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArticle.withModal);
