import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    }

    setTodos(state => (
      [...state, newTodo]
    ));
  };

  const deleteTodo = (id) => {
    setTodos(state => state.filter(element => element.id !== id))
  }

  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} deleteTodo={deleteTodo}/>
          )}
        />
        {/* <ScrollView>
            {todos.map(todo => (
              <Todo key={todo.key}  todo={todo} />
            ))}
        </ScrollView> */}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginBottom: 40,
  },
});
