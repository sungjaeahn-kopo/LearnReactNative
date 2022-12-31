/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  const today = new Date();
  console.log(today);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <DateHead date={today} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
