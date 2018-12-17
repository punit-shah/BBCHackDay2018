import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation';

var myStyle = require('./Styles');

class ThoughtScreen extends Component {
  constructor(props) {
    super(props);
    this.thoughtsInput = React.createRef();
  }

  loaded() {
    this.refs.thoughtsInput.focus();
  }

  render() {
    return (
      <View style={myStyle.styles.container}>
        <NavigationEvents onDidFocus={payload => this.loaded()} />
        <TextInput
          ref="thoughtsInput"
          style={myStyle.styles.thoughtsInput}
          placeholder="share your thoughts..."
        />
      </View>
    );
  }
}

export default ThoughtScreen;
