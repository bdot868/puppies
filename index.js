const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  mongoose = require('mongoose'),
  Puppy = require('./models/Puppy.js')

//connecting to mongoose: database name: doghaus
  mongoose.connect('mongodb://localhost/doghaus', (err) => {
    console.log(err || "Connected to mongo!")
  })

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.json({message: "Who let the dogs out!"})
})

// Finds all the puppies in the database
app.get('/puppies', (req,res) => {
  Puppy.find({},(err, AllDemPuppies) =>{
  res.json(AllDemPuppies)
  })
})
// Finds a single puppy using its ID (req.params.id)
app.get('/puppies/:id',(req,res) =>{
  Puppy.findById(req.params.id, (err,pup) =>{
    res.json(pup)
  })
})
// Finds a single puppy using its ID (req.params.id), updates the values (req.body)
// and returns the new updated puppy (new:{true})
app.patch('/puppies/:id', (req,res) =>{
  Puppy.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPup)=>{
    res.json({sucess:true, puppy: updatedPup})
  })
})


//CREATE puppies
app.post('/puppies', (req, res) => {
  Puppy.create(req.body, (err, newPuppy) => {
    res.json({success: true, puppy: newPuppy})

  })
})

//DELETE a puppy
app.delete('/puppies/:id', (req, res) => {
  Puppy.findByIdAndRemove(req.params.id, (err, deletedPuppy) => {
    res.json({success: true, deletedPuppy})
  })
})
//connecting the server

  app.listen(3000, (err) => {
    console.log(err || "Server running on 3000.")
  })
