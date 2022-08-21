import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";

@observer
class DashboardTodo extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{todoStore.remaining}</strong> item left
        </span>
        <ul className="filters">
          <li>
            <a
              className={`pointer ${todoStore.ShowFilter === "all" ? "selected" : ""}`}
              onClick={(event) => todoStore.updateFilter("all")}
              href="#/"
            >
              All
            </a>
          </li>
          <li>
            <a
              className={`pointer ${todoStore.ShowFilter === "active" ? "selected" : ""}`}
              onClick={(event) => todoStore.updateFilter("active")}
              href="#/active"
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={`pointer ${todoStore.ShowFilter === "completed" ? "selected" : ""}`}
              onClick={(event) => todoStore.updateFilter("completed")}
              href="#/completed"
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={(event) => todoStore.clearCompleted()}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default DashboardTodo;
