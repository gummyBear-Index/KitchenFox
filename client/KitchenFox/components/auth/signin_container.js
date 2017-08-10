import { connect } from 'react-redux';
import SignIn from './signin';
import { signin } from '../../actions/session_actions';

const mapStateToProps = state => ({
  // currentUser: state.session.currentUser,
  // token: state.session.token,
  // errors: state.session.errors
  session: state.session,
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
