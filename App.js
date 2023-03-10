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
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './components/screens/MainScreen';
import DetailScreen from './components/screens/DetailScreen';

const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  // 최신 JS 문법 : nullish 병합 연산자 >> 연산자 좌측 null/undefined => 우측값
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  const nameMap = {
    Home: '홈',
    Search: '검색',
    Notification: '알림',
    Message: '메세지',
  };

  return nameMap[routeName];
}

const App = () => {
  // const today = new Date();

  // const [todos, setTodos] = useState([
  //   {id: 1, text: '작업환경 설정', done: true},
  //   {id: 2, text: '리액트 네이티브 기초 공부', done: false},
  //   {id: 3, text: '투두리스트 만들어보기', done: false},
  // ]);

  // Async Storage 불러오기
  // useEffect(() => {
  //   // get 결과물을 setTodos의 인자로 함
  //   todosStorage.get().then(setTodos).catch(console.error);
  // }, []);

  // // Async Storage 저장
  // useEffect(() => {
  //   todosStorage.set(todos).catch(console.error);
  // }, [todos]);

  // const onInsert = text => {
  //   const nextId =
  //     todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
  //   const todo = {
  //     id: nextId,
  //     text,
  //     done: false,
  //   };

  //   setTodos(todos.concat(todo));
  // };

  // const onToggle = id => {
  //   const nextTodos = todos.map(todo =>
  //     todo.id === id ? {...todo, done: !todo.done} : todo,
  //   );
  //   setTodos(nextTodos);
  // };

  // const onRemove = id => {
  //   const nextTodos = todos.filter(todo => todo.id !== id);
  //   setTodos(nextTodos);
  // };

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
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          // options={{headerShown: false}}
          options={({route}) => ({
            title: getHeaderTitle(route),
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* <Drawer.Navigator
        initialRouteName="Home"
        // 모든 화면에서 Header 없애는 code
        screenOptions={{
          drawerActiveBackgroundColor: '#fb8c00',
          drawerActiveTintColor: 'white',
        }}
        drawerPosition="left"
        backBehavior="history"
        drawerContent={({navigation}) => (
          // 아이폰 사용시 꼭 필수 선언 컴포넌트
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              onPress={() => navigation.closeDrawer()}
              title="Drawer 닫기"
            />
          </SafeAreaView>
        )}></Drawer.Navigator> */}
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   block: {
//     flex: 1,
//     backgroundColor: 'white', // 안드로이드 기본 배경색은 회색
//   },
//   avoid: {
//     flex: 1, // ios는 keyboardAvoidingPlatform으로 키보드 동작 설정
//   },
// });

export default App;
