import React, { Component } from 'react';
import { TouchableHighlight, View, Button, Image } from 'react-native';
import PropTypes from 'prop-types';
import images from '../images';
import { vw } from 'react-native-expo-viewport-units';

const colours = {
  white: '#fff',
  darkGrey: '#555',
};

const styles = {
  flexParent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  eventButton: {
    padding: 1,
    margin: 0.5,
    maxWidth: vw(40),
    backgroundColor: colours.darkGrey,
    color: colours.white,
  },
  eventImage: {
    maxWidth: vw(50),
    height: 100,
  },
};

class EventPanel extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.flexParent}
        onPress={() => this.goToFeedScreen(this.props.buttonEvent)}
      >
        <View>
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
      </TouchableHighlight>
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
