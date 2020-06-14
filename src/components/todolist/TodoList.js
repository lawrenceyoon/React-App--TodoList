// dependencies
import React from 'react';
import FlipMove from 'react-flip-move';
// local files
import './TodoList.scss';

const TodoList = (props) => {
  const List = props.todos.map((todo) => {
    return (
      <div className="TodoItem" key={todo.id}>
        <input
          className={todo.isCompleted ? "crossed-line" : ""}
          type="text"
          id={todo.id}
          onChange={(event) => {props.updateTodo(event.target.value, todo.id)}}
          value={todo.text}
        />
        <input
          className="checkComplete"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(event) => props.isCompleted(event, todo.id)}
        />
        <span className="icon">
          <i
            className="trash alternate outline icon"
            onClick={() => props.deleteTodo(todo.id)}>
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