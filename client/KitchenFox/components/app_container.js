import { connect } from 'react-redux';
import App from './app';
import { loadLocalUser } from '../actions/session_actions';

const mapStateToProps = ({ session }) => (
  {
    session,
  }
);

const mapDispatchToProps = dispatch => (
  {
    loadLocalUser: () => dispatch(loadLocalUser()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
