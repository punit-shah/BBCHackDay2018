import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { vw } from 'react-native-expo-viewport-units';
import StatusBarBackground from './StatusBarBackground';
import EventPanel from './EventPanel';

const events = [
  {
    name: 'Grad Hack 2k18',
    image: 'gradhack',
  },
  {
    name: 'Olympic Swimming',
    image: 'swimming',
  },
  {
    name: 'Notting Hill Carnival',
    image: 'carnival',
  },
  {
    name: 'Football',
    image: 'football',
  },
  {
    name: 'Radio 1 Live Lounge',
    image: 'concert',
  },
];

const styleColors = {
  white: '#fff',
  aGoodPurple: '#4D2C7A',
  black: '#000',
};

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <StatusBarBackground />
        <View>
          <View style={styles.header}>
            <Text style={styles.textWhite}>BBC Events</Text>
          </View>
          <Text style={styles.textBlack}>choose an event 📅</Text>
          <View style={styles.flexContainer}>
            {events.map((event, index) => (
              <EventPanel
                imageLocation={event.image}
                buttonTitle={event.name}
                key={index}
                buttonEvent={event}
                navigation={this.props.navigation}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    margin: 1,
    flex: -1,
    flexWrap: 'wrap',
  },
  header: {
    width: vw(100),
    backgroundColor: styleColors.aGoodPurple,
    padding: 1,
  },
  textWhite: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    color: styleColors.white,
  },
  textBlack: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    color: styleColors.black,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
