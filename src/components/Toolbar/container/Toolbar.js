import { connect } from 'react-redux';
import { logOut } from '@/reducers/user';
import Toolbar from '../layout/Toolbar';

const mapStateToProps = state => ({
  ...state.user,
});

const mapDispatchToProps = {
  logOut,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Toolbar);
