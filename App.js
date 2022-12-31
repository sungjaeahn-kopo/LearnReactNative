/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={styles.full}>
      <Button title="토글" onPress={onPress} />
      {/* {visible && <Box rounded={true} size="large" color="blue" />} */}
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    // backgroundColor: 'cyan', // 전체영역 사용여부 확인용
  },
});

export default App;
