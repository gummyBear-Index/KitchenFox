import { connect } from 'react-redux';
import { sendItems } from '../../actions/inventory_actions';
import PantryItem from './pantry_index';

const mapStateToProps = ({ session, inventory }) => ({
  session,
  inventory
});

const mapDispatchToProps = dispatch => ({
  sendItems: (token, inventory) => dispatch(sendItems(token, inventory))
  // requestItems: token => dispatch(requestItems(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryItem);
