import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import StatusBarBackground from '../components/StatusBarBackground';
import EventPanel from '../components/EventPanel';
import events from '../events';

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
          <Header searchButton />
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
