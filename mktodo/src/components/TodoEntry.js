import React, { Component } from "react";
import todoStore from "../stores/TodoStore";

class TodoEntry extends Component {
  state = {
    TitleTask: "",
  };
  handlKeyDown = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    event.preventDefault();
    todoStore.addTodo(this.state.TitleTask);
    this.setState({
        TitleTask: ''
    })
  };
  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          value={this.state.TitleTask}
          onChange={(event) =>
            this.setState({ TitleTask: event.target.value })
          }
          onKeyDown={(event) => this.handlKeyDown(event)}
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
        ></input>
      </header>
    );
  }
}

export default TodoEntry;
