import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import images from '../images';

const Header = ({ searchButton }) => (
  <View
    style={[
      styles.header,
      { justifyContent: searchButton ? 'space-between' : 'center' },
    ]}
  >
    <View style={styles.leftPad} />
    <Text style={styles.headerText}>
      <Image style={styles.logo} source={images.bbc} resizeMode="contain" />{' '}
      Events
    </Text>
    {searchButton && <SearchButton />}
  </View>
);

const colors = {
  purple: '#4D2C7A',
  white: '#fff',
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    marginTop: StatusBar.currentHeight,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
  },
  logo: {
    height: 20,
    width: 20 * 3.49,
  },
  leftPad: {
    width: 20,
    height: 20,
  },
});

Header.propTypes = {
  searchButton: PropTypes.bool,
};

export default Header;
