import { connect } from 'react-redux';
import SignUp from './signup';
import { signup, logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
