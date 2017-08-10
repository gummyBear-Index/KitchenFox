import { connect } from 'react-redux';
import App from './app';
import { checkLogin, fetchToken } from '../actions/session_actions';

const mapStateToProps = ({ session }) => (
  {
    session,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchToken: () => dispatch(fetchToken()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
