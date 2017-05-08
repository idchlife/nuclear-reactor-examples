import { notify } from "nuclear-reactor";

class TodoReactor {
  constructor() {
    this.todos = [];

    this.addTodo("Eat breakfast", false);
    this.addTodo("Drink carrot juice", false);
    this.addTodo("Thank mr skeltal", false);
  }
  
  addTodo(name, shouldNotify = true) {
    this.todos.push();
    
    this.todos.push({
      id: Math.ceil(Math.random() * 10000),
      name,
      done: false
    });
    
    shouldNotify && notify();
  }
  
  removeTodo(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    
    notify();
  }
  
  toggleDoneTodo(id) {
    const todo = this.todos.find(t => t.id === id);

    todo.done = !todo.done;
    
    notify();
  }
}

export default new TodoReactor();