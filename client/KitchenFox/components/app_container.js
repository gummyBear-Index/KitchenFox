import { connect } from 'react-redux';
import App from './app';
import { checkLogin, fetchToken } from '../actions/session_actions';

const mapStateToProps = state => (
  {
    state,
  }
);

const mapDispatchToProps = dispatch => (
  {
    checkLogin: () => dispatch(checkLogin()),
    fetchToken: () => dispatch(fetchToken()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
