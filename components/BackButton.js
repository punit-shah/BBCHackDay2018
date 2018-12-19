import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import colors from '../colors';
const { Polygon } = Svg;

const BackButton = ({ onPress }) => (
  <TouchableOpacity style={styles.backButton} onPress={onPress}>
    <Svg width="20" height="20" viewBox="0 0 32 32" fill={colors.white}>
      <Polygon points="3 16 29 32 29 24.8 14.4 16 29 7.2 29 0 3 16" />
    </Svg>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backButton: {
    height: 20,
    width: 20,
  },
});

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
