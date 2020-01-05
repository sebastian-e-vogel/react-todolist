import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
}));

class ToDo extends Component{ 

  constructor(){
    super();
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    this.handleEdit = this.handleEdit.bind(this)
    this.handleEditToDo = this.handleEditToDo.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.state = {
      isEditable: false,
      editableToDo:{},
      text: "",
    }
 }
 
 handleEditToDo(){
   
    fetch('http://localhost:5000/todos/' + this.state.editableToDo.id, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({description: this.state.text })
     })

   this.setState({    
     isEditable: false
    })

  this.props.edit(this.state.editableToDo.id, this.state.text)
 }
 
handleEdit(todo){
    this.setState({ 
   isEditable: true,
  editableToDo: todo,
  text: todo.description
 })
}

disableEditToDo(){
  this.setState({
    isEditable: false
  })
}

handleInput(e){
  this.setState({ text: e.target.value })
  
}

handleDeleteToDo(todoId){
    fetch('http://localhost:5000/todos/' + todoId, {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({id: todoId})
     })
     this.props.delete(todoId)
}

render (){
    const classes = useStyles; 
           if(this.state.isEditable) {
             return(
              <div className={classes.root}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={50}>
                         
                  <div className={classes.demo}>
                    <List>
                     <ListItem> 
                          <TextField
                            label='Edit'
                             value={this.state.text}
                            margin="normal"
                            fullWidth="false"
                            onChange={this.handleInput}
                          />
                          <IconButton>
                            <DoneIcon
                              fontSize="large"
                              onClick={()=> {this.handleEditToDo()}}
                            /> 
                            </IconButton>
                            <IconButton>
                              <CloseIcon 
                               fontSize="large" 
                               onClick={()=> {this.disableEditToDo()}}
                              />
                            </IconButton>
                    </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            
            </div>
             )
            } else {
       return(                       
                <div className={classes.demo}>
                
                   <ListItem key={this.props.index}> 
                        <ListItemText primary={this.props.tarea.description} />
                        <ListItemSecondaryAction>
                        <IconButton onClick={() => this.handleEdit(this.props.tarea)}>
                           <EditIcon /> 
                          </IconButton>
                          <IconButton edge="end" aria-label="delete" onClick={() => this.handleDeleteToDo(this.props.tarea.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                
                </div>
        )
          }

      }
    

}

export default ToDo;