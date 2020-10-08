import React, { Component } from 'react'

export class AddTodo extends Component {
    // CREATING STATE FOR INPUT
    state= {
        title: ' '
    }

    // ONSUBMIT METHOD
    // pass title up, clear the field
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }



    // SETTING COMPONENT STATE
    //setting title top whatever is typed in
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
    return (
        <form onSubmit={this.onSubmit} style={{display: 'flex' }} >
            <input 
            type='text'
            name='title' 
            placeholder='Add Todo ...' 
            style={{ flex: '10', padding: '5px' }}
            value={this.state.title}
            onChange={this.onChange}
            />
            <input 
            type="submit" 
            value="Submit" 
            className="btn"
            style={{flex: '1'}}
            />
        </form>
    )
  
    }
}

export default AddTodo;