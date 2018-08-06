import React from 'react';
import { App } from 'proton-native';

// screens 
import UserScreen from './screens/userScreen';
import MainScreen from './screens/mainScreen';

export const SwitchRouter = (route) => {
  let path = 'main';
  
  if (path == 'main') {
    return (
      <App>
        <MainScreen />
      </App>
    )
  } else if (path == 'user') {
    return (
      <App>
        <UserScreen />
      </App>
    )
  }
}