// dependencies
import React from 'react';
// local files
import './App.scss';
import InputBar from '../inputbar/InputBar'
import TodoList from '../todolist/TodoList';

class App extends React.Component {
  // state
  state = {
    todos: [],
    currentTodo: {
      text: "",
      id: ""
    }
  };

  // event handlers
  onInputChange = (event) => { // Input bar
    this.setState({
      currentTodo: {
        text: event.target.value,
        id: Date.now()
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
          updateTodo={this.onUpdateTodo}
          deleteTodo={this.onDeleteTodo}
        />
      </div>
    );
  };
};

export default App;