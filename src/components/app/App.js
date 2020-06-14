// dependencies
import React from 'react';
// local files
import './App.scss';
import InputBar from '../inputbar/InputBar'
import TodoList from '../todolist/TodoList';

class App extends React.Component {
  // state
  state = {
    todos: [
      { text: "three", id: 0, isCompleted: false },
      { text: "example", id: 1, isCompleted: false },
      { text: "todos", id: 2, isCompleted: false }
    ],
    currentTodo: {
      text: "",
      id: "",
      isCompleted: false
    }
  };

  // event handlers
  onInputChange = (event) => { // Input bar
    this.setState({
      currentTodo: {
        text: event.target.value,
        id: Date.now(),
        isCompleted: false
      }
    });
  };

  onFormSubmit = (event) => { // Add todo
    event.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.currentTodo],
      currentTodo: {
        text: ""
      }
    });
  };

  onUpdateTodo = (text, id) => { // Editing todo
    this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      };
    });
    this.setState({todos: this.state.todos});
  };

  onToggleCompleted = (event, id) => { // Check completed on/off todo
    const { checked } = event.target;
    const todos = [...this.state.todos];
    const todoIndex = this.state.todos.findIndex((todo) => todo.id === id);
    todos[todoIndex] = { ...todos[todoIndex], isCompleted: checked };
    this.setState({
      todos
    });
  };

  onDeleteTodo = (id) => { // Deleting todo
    const filteredItems = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredItems });
  };

  // JSX
  render() {
    return (
      <div className="App">

        <div className="title">
          TodoList App
        </div>

        <form onSubmit={this.onFormSubmit}>
          <InputBar
            onInputChange={this.onInputChange}
            value={this.state.currentTodo.text}
          />
          <button className="ui primary button" type="submit">Add</button>
        </form>

        <TodoList
          todos={this.state.todos}
          isCompleted={this.onToggleCompleted}
          updateTodo={this.onUpdateTodo}
          deleteTodo={this.onDeleteTodo}
        />

        <div className="info-bar">* Create, read, update, check on/off, and delete todos! *</div>

      </div>
    );
  };
};

export default App;