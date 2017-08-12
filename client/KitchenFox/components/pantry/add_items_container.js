import { connect } from 'react-redux';

import AddItems from './add_items';
import { logout } from '../../actions/session_actions';
import { requestItems, sendItems } from '../../actions/inventory_actions';


const mapStateToProps = ({ session, inventory }) => (
  {
    session,
    inventory,
  }
);

const mapDispatchToProps = dispatch => (
  {
    requestItems: token => dispatch(requestItems(token)),
    logout: () => dispatch(logout()),
    sendItems: (token, inventory) => dispatch(sendItems(token, inventory)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AddItems);
