import {observable, action, computed} from 'mobx'
import TodoModel from "./TodoModel";

class TodoStore {
    @observable ShowFilter = 'all';
    @observable Todos = [
    ]
    Incremental = 0
    @observable ItemLength = 0

    @action
    addTodo(Title){
        this.Todos.push(new TodoModel(this, this.Incremental ++, Title, false))
        this.ItemLength ++
    }
    @action
    deleteTodo(id){
        const removeItem = this.Todos.filter(todo => todo.Id !== id);
        this.Todos = removeItem;
    }
    @action
    itemLength(){
        this.Todos.map((todo,key)=> {
            if(!todo.Completed){
                console.log(this.ItemLength);
                this.ItemLength ++
            }
        })
        return this.ItemLength
    }

    @action
    clearCompleted(){
        const removeItem = this.Todos.filter(todo => !todo.Completed);
        this.Todos = removeItem;
    }

    @action 
    updateFilter(filter) {
        this.ShowFilter = filter;
    }

    @computed get remaining() {
        return this.Todos.filter(todo => !todo.Completed).length
    }

    @computed 
    checkAll(){
        return this.Todos.map(todo => todo.Completed = true)
    }

    @computed get todosFiltered() {
      if (this.ShowFilter === 'all') {
        return this.Todos;
      } else if (this.ShowFilter === 'active') {
        return this.Todos.filter(todo => !todo.Completed);
      } else if (this.ShowFilter === 'completed') {
        return this.Todos.filter(todo => todo.Completed);
      }

      return this.todos;
    }
}

const todoStore = new TodoStore()
export default todoStore
