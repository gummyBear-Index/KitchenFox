import { StackNavigator } from 'react-navigation';

import Greeting from '../components/auth/greeting';
import SignupContainer from '../components/auth/signup_container';
import SigninContainer from '../components/auth/signin_container';

const Welcome = StackNavigator({
  Greeting: { screen: Greeting },
  Signup: { screen: SignupContainer },
  Signin: { screen: SigninContainer },
});


export default Welcome;
