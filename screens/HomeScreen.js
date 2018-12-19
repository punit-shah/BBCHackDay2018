import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import StatusBarBackground from '../components/StatusBarBackground';
import EventPanel from '../components/EventPanel';
import events from '../events';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBarBackground />
        <View>
          <Header searchButton />
          <View style={styles.container}>
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
  container: {
    marginTop: 20,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
