import { connect } from 'react-redux';
import RecipesIndex from './recipes_index';
import { logout } from '../../actions/session_actions';
import { requestItems } from '../../actions/inventory_actions';


const mapStateToProps = ({ session, inventory }) => (
  {
    session,
    inventory
  }
);

const mapDispatchToProps = dispatch => (
  {
    logout: () => dispatch(logout()),
    requestItems: (token) => dispatch(requestItems(token))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RecipesIndex);
