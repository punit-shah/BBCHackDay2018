import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ExperienceScreen extends Component {
  static navigationOptions = {
    title: 'Experience',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>share your experience 🙃</Text>
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

export default ExperienceScreen;
