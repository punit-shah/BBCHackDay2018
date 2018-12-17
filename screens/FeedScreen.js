import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../components/Post';

class FeedScreen extends Component {
  render() {
    const event = this.props.navigation.getParam('event');

    const posts = event.posts.map((post, index) => (
      <Post user={post.user} type={post.type} key={index} />
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.eventTitle}>{event.name}</Text>
        {posts}
        {/* <Button
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
        /> */}
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

const colors = {
  grey: '#eee',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 26,
    padding: 20,
    paddingTop: 40,
    borderWidth: 1,
    borderColor: colors.grey,
  },
});

FeedScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedScreen;
