import { StackNavigator } from 'react-navigation';

import PantryAddItemsContainer from '../components/pantry/add_items_container';
import DashboardPantryStocked from '../components/dashboard/pantry_stocked';
import PantryCategoriesIndex from '../components/pantry/pantry_categories_index';
import PantryCategoryIndex from '../components/pantry/pantry_category_index';
import RecipesIndex from '../components/recipes/recipes_index';

const Pantry = StackNavigator({
  Pantry: { screen: PantryCategoriesIndex },
  PantryCategory: { screen: PantryCategoryIndex },
  AddItem: { screen: PantryAddItemsContainer },
  Dashboard: { screen: DashboardPantryStocked },
  Recipes: { screen: RecipesIndex },
});
// const Pantry = StackNavigator({
//   Pantry: { screen: PantryCategoriesIndex },
//   PantryCategory: { screen: PantryCategoryIndex },
// });

export default Pantry;
