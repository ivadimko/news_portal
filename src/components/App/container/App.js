import { connect } from 'react-redux';
import { getUserDetails } from '@/reducers/user';
import App from '../layout/App';

const mapStateToProps = null;

const mapDispatchToProps = {
  getUserDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
