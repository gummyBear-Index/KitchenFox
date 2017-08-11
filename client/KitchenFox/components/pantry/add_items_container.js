import { connect } from 'react-redux';

import AddItems from './add_items';
import { logout } from '../../actions/session_actions';
import { requestItems, sendItems } from '../../actions/inventory_actions';
import { clearCart } from '../../actions/cart_actions';


const mapStateToProps = ({ session, cart, inventory }) => (
  {
    session,
    cart,
    inventory,
  }
);

const mapDispatchToProps = dispatch => (
  {
    requestItems: token => dispatch(requestItems(token)),
    logout: () => dispatch(logout()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddItems);
