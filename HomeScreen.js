import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const events = [
  {
    name: 'hack day',
  },
  {
    name: 'generic music festival',
  },
  {
    name: 'boring sport game',
  },
];

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        {events.map((event, index) => (
          <Button
            title={event.name}
            onPress={() => this.goToFeedScreen(event)}
            key={index}
          />
        ))}
      </View>
    );
  }

  goToFeedScreen(event) {
    this.props.navigation.navigate('Feed', { event });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
