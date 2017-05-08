import React, { Component } from "react";
import { AwareOf } from "nuclear-reactor";
import TodoReactor from "../reactors/TodoReactor";
import Todo from "./Todo";

class TodoApp extends Component {
  render() {
     return (
       <div>
         {this.state.todos.map(t => <Todo {...t} />)}
       </div>
     );
  }
}

AwareOf(
  TodoReactor
)(TodoApp)

export default TodoApp;