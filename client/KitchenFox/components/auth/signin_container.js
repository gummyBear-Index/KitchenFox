import { connect } from 'react-redux';
import SignIn from './signin';
import { signin } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  // currentUser: state.session.currentUser,
  // token: state.session.token,
  // errors: state.session.errors
  session,
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
