import { connect } from 'react-redux';
import { signIn } from '@/reducers/user';
import SignInForm from '../layout/SignInForm';

const mapStateToProps = null;

const mapDispatchToProps = {
  signIn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);
