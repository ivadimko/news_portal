import { connect } from 'react-redux';
import { getUserDetails } from '@/reducers/user';
import App from '../layout/App';

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = {
  getUserDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
