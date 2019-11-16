import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/TodoList';
import ToDoForm from './components/ToDoForm';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


class App extends Component
{
  
  constructor()
  {
    super();
    this.state = {
      todos: []
    }
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(todo) {
    this.setState({todos: [... this.state.todos, todo]} )
  }
   
  render(){
  const classes = useStyles;

  return (
    <div className="App">
        <div className={classes.root}>
            <AppBar position="static">
               <Toolbar variant="dense">
                 <Typography variant="h6" color="inherit">
                     Cantidad de tareas pendientes: {this.state.todos.length}
                  </Typography>
                </Toolbar>
            </AppBar>
         </div>
            
      <ToDoForm onAddToDo={this.handleAddToDo}/>  
      <ToDoList tareas={this.state.todos}/>

         
    </div>
  );
  }
}

export default App;
