const router = require('express').Router();
const Workout = require('../models/workoutModel.js');

router.get('/api/workouts', async (req, res) => {
    try {
        const workoutData = await Workout.findAll();
        return res.status(200).json(workoutData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

    router.get('/api/workouts/range', async (req, res) => {
        try {
            const workoutData = await Workout.findAll();
            return res.status(200).json(workoutData);
          } catch (err) {
            res.status(500).json(err);
          }
        });

    router.put('/api/workouts/:id', (req, res) => {
        // update a category by its `id` value
        Workout.updateOne({_id:req.params.id},{$push: {exercises: req.body}})
        .then((data) => {
          return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
        
      });

      module.exports = router;