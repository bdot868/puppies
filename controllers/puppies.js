const
  Puppy = require('../models/Puppy.js')

module.exports = {
  index: (req,res) => {
    Puppy.find({},(err, AllDemPuppies) =>{
    res.json(AllDemPuppies)
    })
  },
  show: (req,res) =>{
    Puppy.findById(req.params.id, (err,pup) => {
      res.json(pup)
    })
  },
  create: (req, res) => {
    Puppy.create(req.body, (err, newPuppy) => {
      res.json({success: true, puppy: newPuppy})
    })
  },
  update: (req,res) =>{
    Puppy.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPup)=>{
      res.json({sucess:true, puppy: updatedPup})
    })
  },
  delete: (req, res) => {
    Puppy.findByIdAndRemove(req.params.id, (err, deletedPuppy) => {
      res.json({success: true, deletedPuppy})
    })
  }
}
