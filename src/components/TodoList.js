import React, { Component } from 'react';


class ToDoList extends Component{

    constructor(props){
     super(props);
            this.state = {
              
              }

          }
        

    

    render() 
    {
     const resultList = this.props.tareas.map((todo)=>
     {
       return (<li>{todo}</li>)
     })
    
        return(   
          <div>   
             <ul>{resultList}</ul>
                       
          </div>       
        
        
        )
      
    }
}
    


export default ToDoList;