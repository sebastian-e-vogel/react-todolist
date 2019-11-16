var express = require('express')
  , app = express()



app.use(express.static(__dirname + '/public'))

app.use(require('./controllers/TodosController'))

app.listen(5000, function() {
  console.log('Listening on port 5000...')
})