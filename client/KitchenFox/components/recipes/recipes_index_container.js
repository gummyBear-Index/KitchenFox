import { connect } from 'react-redux';

import RecipesIndex from './recipes_index';
import { logout } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => (
  {
    session,
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipesIndex);
