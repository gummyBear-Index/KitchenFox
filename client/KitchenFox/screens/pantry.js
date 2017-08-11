import { StackNavigator } from 'react-navigation';

import PantryAddItems from '../components/pantry/add_items';
import DashboardPantryStocked from '../components/dashboard/pantry_stocked';
import PantryIndex from '../components/pantry/pantry_index';
import PantryItem from '../components/pantry/pantry_item';
import RecipesIndex from '../components/recipes/recipes_index';

const Pantry = StackNavigator({
  PantryIndex: { screen: PantryIndex },
  PantryItem: { screen: PantryItem },
  AddItem: { screen: PantryAddItems },
  Dashboard: { screen: DashboardPantryStocked },
  Recipes: { screen: RecipesIndex },
});
// const Pantry = StackNavigator({
//   Pantry: { screen: PantryCategoriesIndex },
//   PantryCategory: { screen: PantryCategoryIndex },
// });

export default Pantry;
