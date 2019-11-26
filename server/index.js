var express = require('express')
  , app = express()
  var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(require('./controllers/TodosController'))

var db = require('./models')

db.sequelize.sync();

app.listen(5000, function() {
  console.log('Listening on port 5000...')
})

