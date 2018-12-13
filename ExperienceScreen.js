import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

class ExperienceScreen extends Component {
  static navigationOptions = {
    title: 'Experience',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Feed" onPress={() => this.goToFeedScreen()} />
      </View>
    );
  }

  goToFeedScreen() {
    this.props.navigation.navigate('Feed');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExperienceScreen;
