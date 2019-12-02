var cors = require('cors')
var db = require('./models')
var express = require('express')
  , app = express()
  var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(cors())
app.use(require('./controllers/TodosController'))




db.sequelize.sync();

app.listen(5000, function() {
  console.log('Listening on port 5000...')
})


