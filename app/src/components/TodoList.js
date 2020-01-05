import React, { Component } from 'react';
import ToDo from './ToDo';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

class ToDoList extends Component{ 

   constructor(){
      super();
      this.deleteToDo = this.deleteToDo.bind(this);
      this.editToDo = this.editToDo.bind(this);
   }

   deleteToDo(todoID){
      this.props.delete(todoID)
   }

   editToDo(todoID, todoDescription){
      this.props.edit(todoID, todoDescription)
   }

   render(){

  return (
  <div>
      <Grid container spacing={1}>
         <Grid item xs={20} md={5}>
         <Typography variant="h6" >
            Tareas pendientes:
         </Typography>
            <List>
               {this.props.tareas.map((todo, index) =>  <ToDo 
               tarea={todo}
               index={index} 
               delete={this.deleteToDo}
               edit={this.editToDo}
               />) } 
            </List>
          </Grid>
      </Grid>
  </div>
        
  );
  }
}

export default ToDoList;


