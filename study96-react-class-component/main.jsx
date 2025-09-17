import React, { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editingIndex: null,     // index of the todo being edited
      editingValue: '',       // temporary value for the edit
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal.trim() === '') return;

    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDelete(todo) {
    this.setState((state) => ({
      todos: state.todos.filter((t) => t !== todo),
    }));
  }

  handleEdit(index, todo) {
    this.setState({
      editingIndex: index,
      editingValue: todo,
    });
  }

  handleEditChange(e) {
    this.setState({
      editingValue: e.target.value,
    });
  }

  handleResubmit(index) {
    const updatedTodos = [...this.state.todos];
    updatedTodos[index] = this.state.editingValue;

    this.setState({
      todos: updatedTodos,
      editingIndex: null,
      editingValue: '',
    });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        <Count count={this.state.todos.length} />

        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={todo}>
              {this.state.editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={this.state.editingValue}
                    onChange={(e) => this.handleEditChange(e)}
                  />
                  <button onClick={() => this.handleResubmit(index)}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  {todo}{' '}
                  <button onClick={() => this.handleEdit(index, todo)}>Edit</button>
                  <button onClick={() => this.handleDelete(todo)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
