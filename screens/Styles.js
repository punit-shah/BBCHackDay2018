import { StyleSheet } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import { grey } from 'ansi-colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  thoughtsInput: {
    fontSize: 30,
    width: vw(90),
    height: vh(50),
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 20,
    marginBottom: vh(36),
    borderColor: 'grey',
    borderRadius: 6,
    color: 'darkgrey',
  },
});
