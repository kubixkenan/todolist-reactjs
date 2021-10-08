import React from 'react';
import apiService from './apiService';

class Todo extends React.Component {
    state = {
        todoTxt: '', 
        todoList: []
    }

    componentWillMount(){
        this.getTodos();
    }

    getTodos() {
        const _apiService = new apiService();
        _apiService.get('Todo/List', this.todoLoaded);
    }

    todoLoaded = response => {
        if(!response){
            return;
        }
        this.setState({ todoList: response });
    }

    addTodo() {
        const _apiService = new apiService();
        _apiService.post('Todo/Add', { todoTxt: this.state.todoTxt, done: false, userId: '00000000-0000-0000-0000-000000000000' }, this.todoAdded);
    }

    delete(id){
        const _apiService = new apiService();
        _apiService.delete('Todo/Delete?id=' + id, this.todoDeleted);
    }

    setStatus(id, done){
        const _apiService = new apiService();
        _apiService.put('Todo/SetStatus?id=' + id + '&completed='+ done, this.todoChanged);
    }

    todoChanged = response => {
        this.getTodos();
    }

    todoDeleted = response => {
        this.getTodos();
    }

    todoAdded = response => {
        this.getTodos();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        return (
            <div style={{ textAlign: 'center', padding: 50 }}>
                <h1>Todos</h1>
                <br />
                <input type="text" name="todoTxt" onChange={this.handleChange} placeholder="ToDo" value={this.state.todoTxt} style={{ padding: 5 }}></input>
                <p />
                <button onClick={e => this.addTodo()}>Add</button>
                <p />
                {this.state.todoList.map((data, index) => {
                    return (<div key={index} style={{padding:10, border:'solid'}}>
                        <button onClick={e => this.setStatus(data.id, !data.done)}>{data.done ? "Aç" : "Tamamla"}</button>
                        &nbsp;
                        {data.todoTxt} 
                        &nbsp;
                        <button onClick={e => this.delete(data.id)}>Sil</button>
                    </div>);
                })}
                <p />

            </div>
        );
    }
}

export default Todo;