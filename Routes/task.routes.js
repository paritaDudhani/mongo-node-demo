const express = require('express');
const route = express();
const TaskModel = require('../Models/task.model');

route.get('/',  (req, res) => {
    TaskModel.find({})
    .then(tasks => res.status(200).send(tasks))
    .catch(err => res.status(400).send(err));
    
});

route.post('/', (req, res) => {
    TaskModel.create({
        title: req.body.title,
        status: req.body.status
    }).then(task => res.status(200).send(task))
        .catch(err => res.status(400).send(err.message));
});

route.patch('/:id',  (req, res) => {
    TaskModel.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { status: req.body.status } },
        { new: true })
        .then(task => res.status(200).send(task))
        .catch(err => res.status(400).send(err.message))
});

route.delete('/:id',  (req, res) => {
    TaskModel.findOneAndDelete({ _id: req.params.id })
        .then(task => res.status(200).send(task))
        .catch(err => res.status(400).send(err));
})

module.exports = route;