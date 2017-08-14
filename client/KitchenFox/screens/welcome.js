import { StackNavigator } from 'react-navigation';

import Greeting from '../components/auth/greeting';
import SignupContainer from '../components/auth/signup_container';
import SigninContainer from '../components/auth/signin_container';
import Pantry from './pantry';

const Welcome = StackNavigator({
  Greeting: { screen: Greeting },
  Signup: { screen: SignupContainer },
  Signin: { screen: SigninContainer },
  }, {
  headerMode: 'none'
});


export default Welcome;
