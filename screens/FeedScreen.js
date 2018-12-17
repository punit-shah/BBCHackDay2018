import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../components/Post';

class FeedScreen extends Component {
  render() {
    const event = this.props.navigation.getParam('event');

    // const posts = event.posts.map((post, index) => (
    //   <Post
    //     user={post.user}
    //     type={post.type}
    //     imageLocator={post.data.locator}
    //     imageCaption={post.data.caption}
    //     textContent={post.data.content}
    //     key={index}
    //   />
    // ));
    const posts = (
      <FlatList
        data={event.posts}
        renderItem={({ item, index }) => (
          <Post
            user={item.user}
            type={item.type}
            imageLocator={item.data.locator}
            imageCaption={item.data.caption}
            textContent={item.data.content}
            key={index}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );

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
    paddingTop: 35,
    paddingRight: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
});

FeedScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedScreen;
