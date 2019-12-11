import React, { Component } from 'react';
import ToDo from './ToDo';



class ToDoList extends Component{ 

   constructor(){
      super();
      this.deleteToDo = this.deleteToDo.bind(this);
      this.editToDo = this.editToDo.bind(this);
   }

   deleteToDo(todoID){
      this.props.delete(todoID)
   }

   editToDo(todoID){
     this.props.edit(todoID)
   }

   render(){

  return (
  <div>
     { <ToDo 
     tareas={this.props.tareas} 
     delete={this.deleteToDo}
     edit={this.editToDo}
      /> } 
  </div>
        
  );
  }
}

export default ToDoList;


