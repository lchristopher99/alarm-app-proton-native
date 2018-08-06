import { createSwitchNavigator } from 'react-navigation';
// screens
import MainScreen from './screens/mainScreen';
import UserScreen from './screens/userScreen';

export const rootNav = createSwitchNavigator({
  SignedOut: {
    screen: MainScreen
  },
  SignedIn: {
    screen: UserScreen
  }
},
  {
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'SignedOut'
  }
);
     