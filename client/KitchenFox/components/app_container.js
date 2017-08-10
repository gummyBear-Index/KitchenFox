import { connect } from 'react-redux';
import App from './app';
import { checkLogin } from '../actions/session_actions';

const mapStateToProps = state => (
  {
    state: state,
    currentUser: state.session.currentUser
  }
);

const mapDispatchToProps = dispatch => (
  {
    checkLogin: () => dispatch(checkLogin())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
