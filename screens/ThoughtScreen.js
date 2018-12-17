import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';

var myStyle = require('./Styles');

class ThoughtScreen extends Component {
  constructor(props) {
    super(props);
    this.thoughtsInput = React.createRef();
    this.state = { text: '' };
    this.thoughtSubmit = this.thoughtSubmit.bind(this);
  }

  loaded() {
    this.refs.thoughtsInput.focus();
  }

  thoughtSubmit({ nativeEvent: { key: keyValue } }) {
    if (keyValue == 'Enter') {
      const { text } = this.state;
      alert(text);
    }
  }

  render() {
    return (
      <View>
        <Header />
        <KeyboardAvoidingView
          style={myStyle.styles.container}
          behavior="padding"
          enabled
        >
          <NavigationEvents onDidFocus={payload => this.loaded()} />
          <TextInput
            ref="thoughtsInput"
            style={myStyle.styles.thoughtsInput}
            placeholder="share your thoughts..."
            returnKeyType="send"
            multiline={true}
            onKeyPress={this.thoughtSubmit}
            onChangeText={text => this.setState({ text: text })}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default ThoughtScreen;
