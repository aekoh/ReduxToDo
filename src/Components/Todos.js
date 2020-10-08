import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';



class Todos extends React.Component {



 // MAPPING THROUGH OUR TODOS ARRAY AND FOR EACH ONE WERE CALLING IT "TODO"
 //  OUTPUTTING "TODOITEM" JSX FOR EACH TODO
 render() {
    return this.props.todos.map((todo) => (
        //lists need key props, so we use the id from todo for key
        //passing todo prop
        //passing markComplete prop and running markComplete method above
        // passing delTodo prop
    <TodoItem key={todo.id} todo={todo} markComplete=
    {this.props.markComplete} delTodo={this.props.delTodo} />
    ))
    }




}


// PROPTYPES - VALIDATION FOR PROPERTIES A COMPONENT SHOULD HAVE
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;

//  1. Understand State in React
//  2. Understand props/ PropTypes in React
//  3. Understand Constructors in React
//  4. Understand when to use Function components vs Class components
//  5. Understand JSX
 // 6. Practice Changing code along with building
 // 7. Undertand Events
 

