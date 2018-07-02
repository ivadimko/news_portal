import { connect } from 'react-redux';
import { logOut } from '@/reducers/user';
import User from '../layout/User';

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
