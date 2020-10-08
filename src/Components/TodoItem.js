import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {

// FUNCTION TO CHANGE STYLE WHEN TODO IS COMPLETED
// IF TODO IS COMPLETED THEN PUT A LINE THROUGH TODO
getStyle = () => {
   return  {
       background: 'lightGrey',
       padding: '10px',
       borderBottom: '1px black dotted',
       // IF IT IS TRUE THAT THE PROPS ARE COMPLETED PUT LINE THROUGH
       //ELSE NO STYLE CHANGE
       textDecoration: this.props.todo.completed ? 
       'line-through' :  'none'
   }
}

// markCOMPLETE METHOD, CLIMB THE LATTER USING PROPS
// passing markComplete prop when box is checked

    render() {

        //DESTRUCTORING TO AVOID USING THIS.PROPS ETC
        //  (this, this.props.todo.id)} turns into  (this, id)
        // {this.props.todo.title} turns into         { title }   
        // adding events  
        const{ id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}> X </button>
                </p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle ={
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
