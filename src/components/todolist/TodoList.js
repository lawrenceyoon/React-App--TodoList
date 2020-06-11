// dependencies
import React from 'react';
// local files
import './TodoList.scss';

const TodoList = (props) => {
  const List = props.todos.map(todo => {
    return <div className="List" key={todo.key}>
      {todo.key}{todo.todo}
    </div>
  });

  return (
    <div className="TodoList">
      Hello from TodoList!
      {List}
    </div>
  );
};

export default TodoList;