import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import images from '../images';

class Post extends Component {
  render() {
    const { user, type, textContent, imageLocator } = this.props;

    const postUser = (
      <View style={styles.user}>
        <View style={styles.userImage} />
        <Text style={styles.userName}>{user}</Text>
      </View>
    );

    const postContent = {
      image: (
        <View style={styles.imagePost}>
          <Image
            style={styles.imageContent}
            source={images[imageLocator]}
            resizeMode="contain"
          />
        </View>
      ),
      text: (
        <View style={styles.text}>
          <Text style={styles.textContent}>{textContent}</Text>
        </View>
      ),
    };

    return (
      <View style={styles.container}>
        {postUser}
        {postContent[type]}
      </View>
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  textContent: PropTypes.string,
  imageLocator: PropTypes.string,
  imageCaption: PropTypes.string,
};

const colors = {
  purple: '#4D2C7A',
  grey: '#eee',
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  userImage: {
    height: 30,
    width: 30,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: colors.purple,
  },
  userName: {
    fontSize: 18,
  },
  imagePost: {
    width: '100%',
    minHeight: Dimensions.get('window').width / 1.78,
    backgroundColor: colors.grey,
  },
  imageContent: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  text: {
    margin: 10,
    marginTop: 0,
  },
  textContent: {
    fontSize: 18,
  },
});

export default Post;
