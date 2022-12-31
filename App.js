/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import DateHead from './components/DateHead';
const App = () => {
  const today = new Date();
  console.log(today);

  return (
    <SafeAreaView>
      <DateHead date={today} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
