const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose')

//connecting to mongoose: database name: doghaus
  mongoose.connect('mongodb://localhost/doghaus', (err) => {
    console.log(err || "Connected to mongo!")
  })

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.json({message: "Who let the dogs out!"})
})


  app.listen(3000, (err) => {
    console.log(err || "Server running on 3000.")
  })
