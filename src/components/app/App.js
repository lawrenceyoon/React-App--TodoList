// dependencies
import React from 'react';
// local files
import './App.scss';
import TodoList from '../TodoList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hello from App Component!
        <TodoList />
      </div>
    );
  };
};

export default App;