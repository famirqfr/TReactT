import React, {Component} from 'react';
import TodoItem from './TodoItem';
import todoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component {
    render() {
        return (
            <section className='main'>
                <input id="toggle-all" class="toggle-all" type="checkbox" onClick={(event)=> todoStore.checkAll()}/>
				<label for="toggle-all">Mark all as complete</label>
                <ul className='todo-list'>
                    {
                        todoStore.todosFiltered.map((todo,key)=>{
                            return(
                                <TodoItem todo={todo} key={key}/>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default TodoList