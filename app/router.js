import UserScreen from './screens/mainScreen';
import MainScreen from './screens/mainScreen';


export const rootNav = (route) => {
  if (route == 'user') {
    return <UserScreen/> ;
  } else if (route == 'main') {
    return <MainScreen/> ;
  }
}