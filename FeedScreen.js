import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class FeedScreen extends Component {
  static navigationOptions = {
    title: 'Feed',
  };

  render() {
    const event = this.props.navigation.getParam('event');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>welcome to {event.name}</Text>
        <Button
          title="share your thoughts"
          onPress={() => this.goToThoughtScreen()}
        />
        <Button
          title="share your experience"
          onPress={() => this.goToExperienceScreen()}
        />
        <Button
          title="choose another event"
          onPress={() => this.goToHomeScreen()}
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

  goToHomeScreen() {
    this.props.navigation.navigate('Home');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  welcome: {
    fontSize: 20,
  },
});

FeedScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedScreen;
