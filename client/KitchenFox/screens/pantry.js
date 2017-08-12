import { StackNavigator } from 'react-navigation';
import AddItemsContainer from '../components/pantry/add_items_container';
import DashboardPantryStocked from '../components/dashboard/pantry_stocked';
import PantryIndexContainer from '../components/pantry/pantry_index_container';
import PantryItemContainer from '../components/pantry/pantry_item_container';
import RecipesIndex from '../components/recipes/recipes_index';


const Pantry = StackNavigator({
  PantryIndex: { screen: PantryIndexContainer },
  PantryItem: { screen: PantryItemContainer },
  AddItem: { screen: AddItemsContainer },
  Dashboard: { screen: DashboardPantryStocked },
  Recipes: { screen: RecipesIndex },
});
// const Pantry = StackNavigator({
//   Pantry: { screen: PantryCategoriesIndex },
//   PantryCategory: { screen: PantryCategoryIndex },
// });

export default Pantry;
