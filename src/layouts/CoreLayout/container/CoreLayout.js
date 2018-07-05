import { connect } from 'react-redux';
import { getUserDetails } from '@/reducers/user';
import CoreLayout from '../layout/CoreLayout';

const mapStateToProps = state => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = {
  getUserDetails,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoreLayout);
