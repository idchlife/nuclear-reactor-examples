import React, { Component } from "react";
import TodoReactor, { TodoObject } from "../reactors/TodoReactor";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <span style={{textDecoration: this.props.done ? "line-through" : ""}}>Todo: {this.props.name}</span>
        <button onClick={() => TodoReactor.toggleDoneTodo(this.props.id)}>
          Done
        </button>
        <button onClick={() => TodoReactor.removeTodo(this.props.id)}>
          Remove
        </button>
      </div>
    );
  }
}