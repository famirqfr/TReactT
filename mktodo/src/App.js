import React, {Component} from 'react';
import {observer} from 'mobx-react'
import './App.css';
import todoStore from "./stores/TodoStore";
import TodoEntry from './components/TodoEntry'
import TodoList from './components/TodoList';
import DashboardTodo from './components/DashboardTodo';

@observer
class App extends Component {
    render() {
        return (
            <>
                <div    className='todoapp'>
                    <TodoEntry></TodoEntry>
                    <TodoList></TodoList>
                    <DashboardTodo></DashboardTodo>
                </div>
                <footer className="info">    
                    <p>Written by <a href="#">Famirqfr</a></p>
                    <p>Project of <a href="https://maktabkhooneh.org">Maktabkhooneh</a></p>
                </footer>
            </>
        )
    }
}


export default App;
