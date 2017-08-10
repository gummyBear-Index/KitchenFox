import { StackNavigator } from 'react-navigation';

import PantryAddItems from '../components/pantry/add_items';
import DashboardPantryStocked from '../components/dashboard/pantry_stocked';
import PantryCategoriesIndex from '../components/pantry/pantry_categories_index';
import PantryCategoryIndex from '../components/pantry/pantry_category_index';
import RecipesIndex from '../components/recipes/recipes_index';

const Pantry = StackNavigator({
  Pantry: { screen: PantryCategoriesIndex },
  PantryCategory: { screen: PantryCategoryIndex },
  AddItem: { screen: PantryAddItems },
  Dashboard: { screen: DashboardPantryStocked },
  Recipes: { screen: RecipesIndex },
  }, {
  headerMode: 'none'
});
// const Pantry = StackNavigator({
//   Pantry: { screen: PantryCategoriesIndex },
//   PantryCategory: { screen: PantryCategoryIndex },
// });

export default Pantry;
