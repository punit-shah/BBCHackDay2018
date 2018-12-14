import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ThoughtScreen extends Component {
  static navigationOptions = {
    title: 'Thought',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>share your thoughts 🤔</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default ThoughtScreen;
