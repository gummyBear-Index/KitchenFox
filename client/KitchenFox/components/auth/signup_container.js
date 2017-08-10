import { connect } from 'react-redux';
import Signup from './signup';
import { signin, logout } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
