import { StackNavigator } from 'react-navigation';
import AddItemsContainer from '../components/pantry/add_items_container';
import DashboardPantryStocked from '../components/dashboard/pantry_stocked';
import PantryIndex from '../components/pantry/pantry_index';
import PantryItem from '../components/pantry/pantry_item';
import RecipesIndexContainer from '../components/recipes/recipes_index_container';

const Pantry = StackNavigator({
  PantryIndex: { screen: PantryIndex },
  PantryItem: { screen: PantryItem },
  AddItem: { screen: AddItemsContainer },
  Dashboard: { screen: DashboardPantryStocked },
  Recipes: { screen: RecipesIndexContainer },
});

export default Pantry;
