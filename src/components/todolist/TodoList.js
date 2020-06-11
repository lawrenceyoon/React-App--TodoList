// dependencies
import React from 'react';
// local files
import './TodoList.scss';

const TodoList = (props) => {
  const List = props.todos.map(todo => {
    return <div className="TodoItem" key={todo.key}>
      {todo.key} {todo.todo}
      <span>
        <i class="trash alternate outline icon" onClick={() => props.deleteTodo(todo.key)}></i>
      </span>
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