import { StackNavigator } from 'react-navigation';
import PantryCategoriesIndex from '../components/pantry/pantry_categories_index';
import PantryCategoryIndex from '../components/pantry/pantry_category_index';

const Pantry = StackNavigator({
  Pantry: { screen: PantryCategoriesIndex },
  PantryCategory: { screen: PantryCategoryIndex },
});

export default Pantry;
