import { connect } from 'react-redux';
import { signIn } from '@/reducers/user';
import SignIn from '../layout/SignIn';

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
