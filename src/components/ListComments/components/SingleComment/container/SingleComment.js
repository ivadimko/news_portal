import { connect } from 'react-redux';
import { removeComment } from '@/reducers/articles';
import SingleComment from '../layout/SingleComment';

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = {
  acceptCallback: removeComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleComment.withModal);
