import { connect } from 'react-redux';
import { removeArticle } from '@/reducers/articles';
import SingleArticle from '../layout/SingleArticle';

const mapStateToProps = state => ({
  ...state.app,
});

const mapDispatchToProps = {
  acceptCallback: removeArticle,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SingleArticle.withModal);
