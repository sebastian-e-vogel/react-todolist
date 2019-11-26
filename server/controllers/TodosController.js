const user = {
    id: '3',
    text: 'my todo'
  }
  
  var db = require('/home/sebastian/react-todolist/server/models')
  var express = require('express')
  , router = express.Router()
 
router.get('/todos', function (req, res) {
 // todos.create({ description: req.body})
  
    console.log(req.body);
    db.Todo.create({ description: req.body.description}).then(todo => {
      console.log("Todo auto-generated ID:", todo.id);
    })
});

router.post('/todos', function (req, res) {
    res.send(user);
 });

  router.get('/todos/:id', function (req, res) {
        res.send({
            id: req.params.id,
            text: 'my todo'
          });
  });

  router.delete('/todos/:id', function (req, res) {
    res.send({
        id: req.params.id,
        text: 'my todo'
      });
});

 

module.exports = router



