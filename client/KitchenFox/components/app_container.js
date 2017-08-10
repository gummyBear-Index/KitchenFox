import { connect } from 'react-redux';
import App from './app';
import { checkLogin, fetchToken, fetchFirstName, fetchLastName } from '../actions/session_actions';

const mapStateToProps = ({ session }) => (
  {
    session,
  }
);

const mapDispatchToProps = dispatch => (
  {
    checkLogin: () => dispatch(checkLogin()),
    fetchToken: () => dispatch(fetchToken()),
    fetchFirstName: () => dispatch(fetchFirstName()),
    fetchLastName: () => dispatch(fetchLastName()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
