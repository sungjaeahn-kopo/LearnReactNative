import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import DateHead from './components/DateHead';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorage from './storages/todosStorage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './components/screens/HomeScreen';
import DetailScreen from './components/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  // Async Storage 불러오기
  // useEffect(() => {
  //   // get 결과물을 setTodos의 인자로 함
  //   todosStorage.get().then(setTodos).catch(console.error);
  // }, []);

  // // Async Storage 저장
  // useEffect(() => {
  //   todosStorage.set(todos).catch(console.error);
  // }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };

    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    // <SafeAreaProvider>
    //   <SafeAreaView edges={['bottom']} style={styles.block}>
    //     <KeyboardAvoidingView
    //       behavior={Platform.select({ios: 'padding', android: undefined})}
    //       style={styles.avoid}>
    //       <DateHead date={today} />
    //       {todos.length === 0 ? (
    //         <Empty />
    //       ) : (
    //         <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    //       )}
    //       <AddTodo onInsert={onInsert} />
    //     </KeyboardAvoidingView>
    //   </SafeAreaView>
    // </SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            // 안드로이드 백 버튼 감추기
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
          // options={({route}) => ({
          //   title: `상세 정보 - ${route.params.id}`,
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white', // 안드로이드 기본 배경색은 회색
  },
  avoid: {
    flex: 1, // ios는 keyboardAvoidingPlatform으로 키보드 동작 설정
  },
});

export default App;
