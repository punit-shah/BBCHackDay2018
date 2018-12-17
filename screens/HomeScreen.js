import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const events = [
  {
    name: 'hack day',
    posts: [
      {
        type: 'image',
        user: 'User 1',
        data: {
          locator: 'image0',
          caption: 'Caption',
        },
      },
      {
        type: 'text',
        user: 'User 2',
        data: {
          content: 'Hack day is going great!',
        },
      },
      {
        type: 'image',
        user: 'User 1',
        data: {
          locator: 'image1',
          caption: 'Caption',
        },
      },
      {
        type: 'text',
        user: 'User 2',
        data: {
          content: 'Hack day is going great!',
        },
      },
      {
        type: 'text',
        user: 'User 2',
        data: {
          content: 'Hack day is going great!',
        },
      },
    ],
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
