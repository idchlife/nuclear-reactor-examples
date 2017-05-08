import { h, Component } from "preact";
import { AwareOf } from "nuclear-reactor";
import TodoReactor from "../reactors/TodoReactor";
import Todo from "./Todo";

@AwareOf(TodoReactor)
export default class TodoApp extends Component<any, typeof TodoReactor> {
  render() {
     return (
       <div>
         {this.state.todos.map(t => <Todo {...t} />)}
       </div>
     );
  }
}