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
    this.props.onAddToDo(this.state.text);
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
        <br></br>
        <h3>Tareas pendientes:</h3>
      </div>
    );
  }
}
  export default ToDoForm;