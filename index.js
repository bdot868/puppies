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

app.get('/', (req,res) => {
  res.json({message: "Who let the dogs out!"})
})

app.get('/puppies', puppiesCtrl.index ) // Finds all the puppies in the database
app.get('/puppies/:id', puppiesCtrl.show) // Finds a single puppy using its ID (req.params.id)
app.patch('/puppies/:id', puppiesCtrl.update) // Finds a single puppy using its ID (req.params.id), updates the values (req.body) and returns the new updated puppy (new:{true})
app.post('/puppies', puppiesCtrl.create) //CREATE puppies
app.delete('/puppies/:id', puppiesCtrl.delete) //DELETE a puppy



app.use('/puppies', require('./routes/puppies.js'))
//connecting the server
  app.listen(3000, (err) => {
    console.log(err || "Server running on 3000.")
  })
