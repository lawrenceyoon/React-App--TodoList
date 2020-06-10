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
      todo: "",
      key: ""
    }
  };
  // event handlers
  onFormSubmit = (event) => {
    event.preventDefault();
  };

  onInputChange = (event) => {
    this.setState({
      currentTodo: {
        todo: event.target.value,
        key: Date.now()
      }
    });
  };

  render() {
    return (
      <div className="App">

        <div className="title">
          TodoList App
        </div>

        <form onSubmit={this.onFormSubmit}>
          <InputBar onInputChange={this.onInputChange} value={this.state.currentTodo.todo} />
          <button className="ui primary button" type="submit">Add</button>
        </form>

        <TodoList todos={this.state.todos} />
      </div>
    );
  };
};

export default App;