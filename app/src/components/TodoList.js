import React, { Component } from 'react';


class ToDoList extends Component{
    render() {
     const resultList = this.props.tareas.map((todo) => <li>{todo}</li>)
    
    return(   
      <div>   
          <ul>{resultList}</ul>          
      </div>)
      
    }
}
    


export default ToDoList;