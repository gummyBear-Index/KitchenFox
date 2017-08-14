import { StackNavigator } from 'react-navigation';
import AddItemsContainer from '../components/pantry/add_items_container';
import Dashboard from '../components/pantry/dashboard';
import PantryIndex from '../components/pantry/pantry_index';
import PantryItem from '../components/pantry/pantry_item';
import RecipesIndexContainer from '../components/recipes/recipes_index_container';

const Pantry = StackNavigator({
  Dashboard: {
    screen: Dashboard,
  },
  PantryIndex: {
    screen: PantryIndex,
  },
  PantryItem: {
    screen: PantryItem,
  },
  AddItem: {
    screen: AddItemsContainer
  },
  Recipes: {
    screen: RecipesIndexContainer,
  }}, {
  headerMode: 'none'
});

export default Pantry;
