import merge from 'lodash/merge';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import AppNavigator from '../store/app_navigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Greeting'));

const NavReducer = (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

export default NavReducer;
