import React from 'react';
import Header from './Components/Layout/Header'
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';



class App extends React.Component {
  state= {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Dinner with boyfriend',
        completed: true
      },
      {
        id:3,
        title: 'meeting with boss',
        completed: false
      },
    ]
  }

  // GETTING ID OF TODO THATS BEING MARKED CHECKED
  // CHANGE STATE FOR PARTICULAR TODO BEING CHECKED
  // match id being passed and if matches update completed value
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  // DELETE TODO and add to the state
  // MANIPULATE STATE BY REMOVING TODO USING FILTER TO LOOP THROUGH AND RETURN ANOTHER ARRAY BASED ON THE CONDITION
  // COPY EVERYTHING THATS THERE USING spread operator ...
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id
       != id)] });
  } 

  // ADD TODO and add to the state
   addTodo = (title) => {
     const newTodo = {
       id: 4,
       title: title,
       completed: false
     }
     this.setState({ todos: [...this.state.todos, newTodo] });
   }


  // PASSING TODOS IN AS PROPS
  render () {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete={this.markComplete} 
        delTodo={this.delTodo} />
    </div>
    </div>
  );
  }
  

}



export default App;
