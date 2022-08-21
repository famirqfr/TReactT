import React, {Component} from 'react';
import TodoItem from './TodoItem';
import todoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'

@observer
class TodoList extends Component {
    render() {
        return (
            <section className='main'>
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