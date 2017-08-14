import { StackNavigator } from 'react-navigation';
import AddItemsContainer from '../components/pantry/add_items_container';
import Dashboard from '../components/pantry/dashboard';
import PantryIndex from '../components/pantry/pantry_index';
import PantryItem from '../components/pantry/pantry_item';
import RecipesIndexContainer from '../components/recipes/recipes_index_container';

const Pantry = StackNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  PantryIndex: {
    screen: PantryIndex,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  PantryItem: {
    screen: PantryItem,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  AddItem: {
    screen: AddItemsContainer
  },
  Recipes: {
    screen: RecipesIndexContainer,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

export default Pantry;
