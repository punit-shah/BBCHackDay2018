import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import StatusBarBackground from '../components/StatusBarBackground';
import EventPanel from '../components/EventPanel';

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
      <ScrollView>
        <StatusBarBackground />
        <View>
          <Header />
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    margin: 1,
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
