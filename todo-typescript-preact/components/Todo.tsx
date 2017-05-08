import { h, Component } from "preact";
import TodoReactor, { TodoObject } from "../reactors/TodoReactor";

export default class Todo extends Component<TodoObject, any> {
  render() {
    return (
      <div>
        <span style={this.props.done ? "text-decoration: line-through" : ""}>Todo: {this.props.name}</span>
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