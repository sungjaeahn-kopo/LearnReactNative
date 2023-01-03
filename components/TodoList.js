import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <View>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </View>
      )}
      // 각 항목의 고유값 추출함수 (고유값 : String type)
      ketExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
