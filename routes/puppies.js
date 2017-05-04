const
  express = require('express'),
  puppyRouter = express.Router(),
  puppyCtrl = require('../controllers/puppies.js')

puppyRouter.route('/puppies')
  .get(puppyCtrl.index) //find all puppies
  .post(puppyCtrl.create) //create a puppy

puppyRouter.route('/puppies/:id')
  .get(puppyCtrl.show) //show a single puppy
  .patch(puppyCtrl.update) //update a puppy
  .delete(puppyCtrl.delete) //delete a puppy 
