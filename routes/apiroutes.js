const router = require('express').Router();
const Workout = require('../models/workoutModel.js');

router.get('/api/workouts', (req, res) => {
      Workout.aggregate([
        { $addFields:{totalDuration:{
          $sum:"$exercises.duration"
        }}}
      ]).then((data) => {
        console.log(data)
        return res.status(200).json(data)
      })
      .catch((err) => {
          return res.status(500).json(err)
      });
    });

    router.get('/api/workouts/range', (req, res) => {
      Workout.aggregate([
        { $addFields:{totalDuration:{
          $sum:"$exercises.duration"
        }}}
      ]).then((data) => {
        console.log(data)
        return res.status(200).json(data)
      })
      .catch((err) => {
          return res.status(500).json(err)
      });
    });

    router.put('/api/workouts/:id', (req, res) => {
        console.log(req.body)
        // update a category by its `id` value
        Workout.updateOne({_id:req.params.id},{$push: {exercises: req.body}})
        .then((data) => {
          console.log(data)
          return res.status(200).json(data)
        })
        .catch((err) => {
          console.log(err)
            return res.status(500).json(err)
        })
        
      });

    router.post('/api/workouts', (req, res) => {
      console.log(req.body)
      Workout.create({}).then((data) => {
        console.log(data)
        return res.status(200).json(data)
      })
      .catch((err) => {
          return res.status(500).json(err)
      })
    
    });

      module.exports = router;