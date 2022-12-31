/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
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
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(visible);
  };
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
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
