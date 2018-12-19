import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SearchButton from './SearchButton';
import images from '../images';
import colors from '../colors';
import BackButton from './BackButton';

const Header = ({ searchButton, backButton }) => (
  <View
    style={[
      styles.header,
      {
        justifyContent: searchButton || backButton ? 'space-between' : 'center',
      },
    ]}
  >
    {backButton ? <BackButton /> : <View style={styles.empty} />}
    <Text style={styles.headerText}>
      <Image style={styles.logo} source={images.bbc} resizeMode="contain" />{' '}
      Events
    </Text>
    {searchButton ? <SearchButton /> : <View style={styles.empty} />}
  </View>
);

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
  empty: {
    width: 20,
    height: 20,
  },
});

Header.propTypes = {
  searchButton: PropTypes.bool,
  backButton: PropTypes.bool,
};

export default Header;
