import React, { Component } from 'react';
import { Window, Text } from 'proton-native';


export default class UserScreen extends Component {
  render() {
    return (
      <Window title="Example" size={{ w: 200, h: 100 }}>
        <Text>Hello User!</Text>
      </Window>
    );
  }
}