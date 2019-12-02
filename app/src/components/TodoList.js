import React, { Component } from 'react';
import ToDo from './ToDo';
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

class ToDoList extends Component{ 
  
  


   render(){
     this.props.tareas.map((todo) => <ListItem>{todo.description}</ListItem>)
    const classes = useStyles; 

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            Tareas pendientes:
          </Typography>
                 
          <div className={classes.demo}>
            <List>
             {this.props.tareas.map((todo) =>  <ListItem> 
                  <ListItemText primary={todo.description} />
                  <ListItemSecondaryAction>
                  <IconButton>
                     <EditIcon /> 
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)}
            </List>
          </div>
        </Grid>
      </Grid>
    <ToDo/>
    </div>
  );
  }
}

export default ToDoList;


