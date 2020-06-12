// dependencies
import React from 'react';
import FlipMove from 'react-flip-move';
// local files
import './TodoList.scss';

const TodoList = (props) => {
  const List = props.todos.map((todo) => {
    return (
      <div className="TodoItem" key={todo.key}>
        <input
          type="text"
          id={todo.key}
          onChange={(event) => {props.updateTodo(event.target.value, todo.key)}}
          value={todo.todo}
        />
        <span className="icon">
          <i
            className="trash alternate outline icon"
            onClick={() => props.deleteTodo(todo.key)}>
          </i>
        </span>
      </div>
    );
  });

  return (
    <div className="TodoList">
      <FlipMove duration={300} easing="ease-in-out">
        {List}
      </FlipMove>
    </div>
  );
};

export default TodoList;