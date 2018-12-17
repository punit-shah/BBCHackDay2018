import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import images from '../images';
import { vw } from 'react-native-expo-viewport-units';

const styles = {
  flexParent: {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  eventButton: {
    padding: 1,
    margin: 0.5,
    maxWidth: vw(40),
  },
  eventImage: {
    maxWidth: vw(50),
    height: 100,
  },
};

class EventPanel extends Component {
  render() {
    return (
      <View
        style={styles.flexParent}
        onPress={() => this.goToFeedScreen(this.props.buttonEvent)}
      >
        <Image
          source={images[this.props.imageLocation]}
          style={styles.eventImage}
        />
        <Button
          style={styles.eventButton}
          title={this.props.buttonTitle}
          onPress={() => this.goToFeedScreen(this.props.buttonEvent)}
        />
      </View>
    );
  }

  goToFeedScreen(event) {
    this.props.navigation.navigate('Feed', { event });
  }
}

EventPanel.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonEvent: PropTypes.object.isRequired,
  imageLocation: PropTypes.string.isRequired,
};

export default EventPanel;
