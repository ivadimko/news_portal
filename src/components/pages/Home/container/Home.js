import { connect } from 'react-redux';
import { toggleUnsafeMode } from '@/reducers/app';
import Home from '../layout/Home';

const mapStateToProps = null;

const mapDispatchToProps = {
  toggleUnsafeMode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
