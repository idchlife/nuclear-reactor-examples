import { notify } from "nuclear-reactor";

export interface TodoObject {
  id: number;
  name: string;
  done: boolean;
}

class TodoReactor {
  todos: TodoObject[] = [];
  
  constructor() {
    this.addTodo("Eat breakfast", false);
    this.addTodo("Drink carrot juice", false);
    this.addTodo("Thank mr skeltal", false);
  }
  
  addTodo(name: string, shouldNotify: boolean = true) {
    this.todos.push();
    
    this.todos.push({
      id: Math.ceil(Math.random() * 10000),
      name,
      done: false
    });
    
    shouldNotify && notify();
  }
  
  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
    
    notify();
  }
  
  toggleDoneTodo(id: number) {
    const todo = this.todos.find(t => t.id === id);

    todo.done = !todo.done;
    
    notify();
  }
}

export default new TodoReactor();