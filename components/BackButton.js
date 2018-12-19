import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Svg } from 'expo';
import colors from '../colors';
const { Polygon } = Svg;

const BackButton = () => (
  <TouchableOpacity style={styles.backButton}>
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

export default BackButton;
