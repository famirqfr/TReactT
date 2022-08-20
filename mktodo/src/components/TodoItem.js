import React, { Component } from "react";
import { observer } from 'mobx-react'
import todoStore from "../stores/TodoStore";


@observer
class TodoItem extends Component {
  OnCompleted = () => {
    this.props.todo.toggle()
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={todo.Completed ? "completed" : ""}>
        <div className="view">
          <input
            onClick={this.OnCompleted}
            type="checkbox"
            className="toggle pointer"
            value="on"
            checked={todo.Completed}
          />
          <label>{todo.Title}</label>
          <button class="destroy pointer" onClick={(event) => todoStore.deleteTodo(todo.Id)}></button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
