import { StyleSheet } from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  thoughtsInput: {
    fontSize: 30,
    width: vw(90),
    height: vh(40),
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 20,
    borderColor: '#d4d4d4',
    borderRadius: 8,
    color: '#222',
    position: 'absolute',
    top: vh(5),
  },
});
