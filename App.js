/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  // const name = 'JSX';
  return (
    <SafeAreaView>
      <Box rounded={true} size="large" color="blue" />
      {/* <Greeting name="Props" />
      <Greeting name={name} />
      <Greeting /> */}
    </SafeAreaView>
  );
};

Greeting.defaultProps = {
  name: 'React-Native',
};

export default App;
