import React, { Component } from 'react';
import { throwStatement } from '@babel/types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';




class ToDoForm extends Component{
    constructor(){
        super();
        this.state = {
            text: "",
             }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     
    }


handleInput(e){
   this.setState({ text: e.target.value })
}

handleSubmit(e){
    e.preventDefault();

    fetch('http://localhost:5000/todos', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({description: this.state.text})
     }).then((response) => {
       return response.json()
      })
    .then((todo) => {
      this.props.onAddToDo(todo);      
    })    

   this.setState({text: "" })
    
    }

    

render() {
    return (
      <div className ="container">
        
        
        <form onSubmit={this.handleSubmit}>
          <div className="textfield">
            <TextField
              placeholder="Ingrese nueva tarea"
              label="Nueva tarea"
              onChange={this.handleInput}
              value={this.state.text}
              margin="normal"
              fullWidth="false"
              
            />
          </div>
          <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >Nueva tarea</Button>                
        </form>

      </div>
    );
  }
}
  export default ToDoForm;