import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';

class ToDoAnswer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks: ["example task"],
            newTask: ""
        }
    }

    // componentDidMount() {

    // }

    typeTask (event) {
        this.setState({newTask: event.target.value})
    }

    addTask (event) {
        this.setState({tasks: [...this.state.tasks, this.state.newTask]})
    }

    removeTask (event) {
        this.setState({tasks: this.state.tasks.filter(task => task != this.state.newTask)})
    }

    render() {
        return (
            <div>
                <Input
                    placeholder='Search Here'
                    value={this.state.newTask}
                    onChange={(event) => this.typeTask(event)} />
                <Button onClick={(event) => this.addTask(event)}>Add Task</Button>
                <Button onClick={(event) => this.removeTask(event)}>Remove Task</Button>
                <h3>Results:</h3>
                <DisplayResults tasks = {this.state.tasks}/>
            </div>
        )
    }
}

class DisplayResults extends Component {
    render() {
      return (
        <div>
          {this.props.tasks.map(
          task => {
            return <li>{task}</li>
          })}
        </div>
      )
    }
  }

export default ToDoAnswer;