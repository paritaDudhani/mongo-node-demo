const express = require('express');
const route = express();

const SubtaskModel = require('../Models/subtask.model');
const validation = require('../Middleware/validator');

route.get('/', (req, res) => {
    SubtaskModel.find({})
        .populate('taskId')
        .then(subtasks => res.status(200).send(subtasks))
        .catch(err => res.status(400).send(err.message))
});

route.post('/', validation, (req, res) => {
    SubtaskModel.create({
        title: req.body.title,
        taskId: req.body.taskId,
        status: req.body.status
    }).then(subtask => res.status(200).send(subtask))
        .catch(err => res.status(400).send(err.message))
});

route.get('/:createdAt/search', (req, res) => {
    SubtaskModel.findOne({ createdAt: req.params.createdAt })
        .then(subtask => res.status(200).send(subtask))
        .catch(err => res.status(400).send(err.message))
});

route.patch('/:id', (req, res) => {
    SubtaskModel.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: { status: req.body.status }
    }, {
        new: true
    }).then(subtasks => res.status(200).send(subtasks))
        .catch(err => res.status(400).send(err.message))
});

route.delete('/:id', (req, res) => {
    SubtaskModel.findOneAndDelete({ _id: req.params.id })
        .then(subtasks => res.status(200).send(subtasks))
        .catch(err => res.status(400).send(err.message))
});

module.exports = route;
