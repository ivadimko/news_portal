import { connect } from 'react-redux';
import { signUp, signIn } from '@/reducers/user';
import SignUpForm from '../layout/SignUpForm';

const mapStateToProps = null;

const mapDispatchToProps = {
  signUp, signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);
