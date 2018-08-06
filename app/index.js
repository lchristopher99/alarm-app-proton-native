import React, { Component } from 'react';
import { render } from 'proton-native';
import { rootNav } from './router';

// import MainScreen from './screens/mainScreen';

const Index = rootNav;

class App extends Component {
  render() {
    return <Index/> ;
  }
}

render(<App />); 
