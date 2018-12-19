import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Svg } from 'expo';
const { Path } = Svg;

const SearchButton = () => (
  <TouchableOpacity style={styles.searchButton}>
    <Svg
      width="20px"
      height="20px"
      viewBox="0 0 32 32"
      fill="#fff"
      style={styles.searchIcon}
    >
      <Path d="M32,28.5l-8.2-8.2c3.4-5.1,2.9-12-1.6-16.4C19.7,1.3,16.3,0,13,0C9.7,0,6.3,1.3,3.8,3.8c-5.1,5.1-5.1,13.3,0,18.4 C6.3,24.7,9.7,26,13,26c2.5,0,5.1-0.7,7.3-2.2l8.2,8.2L32,28.5z M6.6,19.4C4.9,17.7,4,15.4,4,13s0.9-4.7,2.6-6.4 C8.3,4.9,10.6,4,13,4c2.4,0,4.7,0.9,6.4,2.6c3.5,3.5,3.5,9.2,0,12.7c-1.7,1.7-4,2.6-6.4,2.6S8.3,21.1,6.6,19.4z" />
    </Svg>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  searchButton: {
    height: 20,
    width: 20,
  },
});

export default SearchButton;
