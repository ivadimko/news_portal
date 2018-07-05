import { connect } from 'react-redux';
import { signUp, signIn } from '@/reducers/user';
import SignUpForm from '../layout/SignUp';

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  signUp, signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
