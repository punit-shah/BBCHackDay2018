import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Feed',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Thought" onPress={() => this.goToThoughtScreen()} />
        <Button
          title="Experience"
          onPress={() => this.goToExperienceScreen()}
        />
      </View>
    );
  }

  goToThoughtScreen() {
    this.props.navigation.navigate('Thought');
  }

  goToExperienceScreen() {
    this.props.navigation.navigate('Experience');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeedScreen;
