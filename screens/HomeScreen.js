import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const events = [
  {
    name: 'hack day',
  },
  {
    name: 'music festival',
  },
  {
    name: 'sport game',
  },
];

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header searchButton />
        <Text style={styles.text}>choose an event 📅</Text>
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
  text: {
    fontSize: 20,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
