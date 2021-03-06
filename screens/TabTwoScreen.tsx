import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import StopWatchButton from '../components/TimerButton'
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
      <StopWatchButton />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
