  import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles(theme => ({
}));




class ToDo extends Component{ 

  constructor(){
    super();
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    this.handleEditToDo = this.handleEditToDo.bind(this)
    this.state = {
      isEditable: false,
      editableToDo:{}
    }
 }


handleEditToDo(todo){
  this.setState({ 
   isEditable: true,
  editableToDo: todo
 })
 
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
                <Grid item xs={12} md={6}>
                         
                  <div className={classes.demo}>
                    <List>
                     <ListItem> 
                          <TextField
                            label='lala'
                            margin="normal"
                            fullWidth="false"
                          />
                          <ListItemSecondaryAction>
                          <IconButton onClick={() => this.handleEditToDo()}>
                             <EditIcon /> 
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => this.handleDeleteToDo()}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                     </ListItem>
                    </List>
                  </div>
                </Grid>
              </Grid>
            
            </div>
             )
            } else {
       return(
            <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" className={classes.title}>
                  Tareas pendientes:
                </Typography>
                       
                <div className={classes.demo}>
                  <List>
                   {this.props.tareas.map((todo, index) =>  <ListItem key={index}> 
                        <ListItemText primary={todo.description} />
                        <ListItemSecondaryAction>
                        <IconButton onClick={() => this.handleEditToDo(todo)}>
                           <EditIcon /> 
                          </IconButton>
                          <IconButton edge="end" aria-label="delete" onClick={() => this.handleDeleteToDo(todo.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>)}
                  </List>
                </div>
              </Grid>
            </Grid>
          
          </div>
        )
          }

      }
    
}

export default ToDo;