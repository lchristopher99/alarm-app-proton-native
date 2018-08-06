import React, { Component } from 'react';
import { Window, Form, Button, TextInput } from 'proton-native';
import { SwitchRouter } from '../router';


const FormInput = (props) => {
  return <TextInput label={props.title} secure={props.secure} onChange={props.onChange} />;
}

export default class MainScreen extends Component {
  state = {
    user: null,
    pass: null
  }

  _handleSubmit = () => {
    console.log('Success!');
    SwitchRouter('user');
  }

  render() {
    return (
      <Window title="Example" size={{ w: 200, h: 100 }}>
        <Form>
          <FormInput title={'Username'} secure={false} onChange={text => this.state.user = text} />
          <FormInput title={'Password'} secure={true} onChange={text => this.state.pass = text} />
          <Button
            onClick={this._handleSubmit}
          >Submit</Button>
        </Form>
      </Window>
    );
  }
}