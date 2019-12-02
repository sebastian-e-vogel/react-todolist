
  var db = require('/home/sebastian/react-todolist/server/models')
  var express = require('express')
  , router = express.Router()
 
router.post('/todos', function (req, res) {
 
    db.Todo.create({ description: req.body.description}).then(todo => {
     res.send(todo)
     console.log("Todo auto-generated ID:", todo.id);
     })

});



router.put('/todos/:id', function (req, res) {

  db.Todo.findByPk(req.params.id).then(function(todo){
   return todo.update({ description: req.body.description })    
  }).then(todo =>{
    res.send(todo)
  })
  
  });


  router.get('/todos', function (req, res) {
    db.Todo.findAll({}).then(todos => {
      res.send(todos)
    });
  });

  router.get('/todos/:id', function (req, res) {
 
    db.Todo.findByPk(req.params.id).then(todos => {
     res.send(todos)
    });
  });

  router.delete('/todos', function (req, res) {

    db.Todo.destroy({
        where: {
          description: req.body.description
        }
      }).then(() => {
        res.send(200);
      });
});

 

module.exports = router



