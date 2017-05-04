const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  Puppy = require('./models/Puppy.js')
  puppiesCtrl = require('./controllers/puppies.js')

//connecting to mongoose: database name: doghaus
  mongoose.connect('mongodb://localhost/doghaus', (err) => {
    console.log(err || "Connected to mongo!")
  })

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/', require('./routes/puppies.js'))

app.get('/', (req,res) => {
  res.json({message: "Who let the dogs out!"})
})


//connecting the server
  app.listen(3000, (err) => {
    console.log(err || "Server running on 3000.")
  })
