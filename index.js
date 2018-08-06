import React, { Component } from 'react';
import { render } from 'proton-native';
import { SwitchRouter } from './app/router';

class Index extends Component {
  render() {
    let Index = SwitchRouter;
    return <Index/> ;
  }
}

render(<Index />); 
