const user = {
    id: '3',
    text: 'my todo'
  }

  var express = require('express')
  , router = express.Router()
 

router.get('/todos', function (req, res) {
  res.send(user);
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



