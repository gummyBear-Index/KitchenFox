import { StackNavigator, addNavigationHelpers } from 'react-navigation';

import Greeting from '../components/auth/greeting';
import SignupContainer from '../components/auth/signup_container';
import SigninContainer from '../components/auth/signin_container';
import PantryAddItems from '../components/pantry/add_items';
import DashboardPantryStocked from '../components/dashboard/pantry_stocked';
import PantryCategoriesIndex from '../components/pantry/pantry_categories_index';
import PantryCategoryIndex from '../components/pantry/pantry_category_index';
import RecipesIndex from '../components/recipes/recipes_index';

const AppNavigator = StackNavigator({
  Greeting: { screen: Greeting },
  Signup: { screen: SignupContainer },
  Signin: { screen: SigninContainer },
  Pantry: { screen: PantryCategoriesIndex },
  PantryCategory: { screen: PantryCategoryIndex },
  AddItem: { screen: PantryAddItems },
  Dashboard: { screen: DashboardPantryStocked },
  Recipes: { screen: RecipesIndex },
});


export default AppNavigator;
