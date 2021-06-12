const db = require('mongoose');
const UUID = require('uuid');
const TaskModel = require('./task.model');

const schema = new db.Schema({
    _id: { 
        type: String,
        default: UUID.v4
    },
    title: {
        type: String,
        set: value => value && value.trim()
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        set: value => value.trim()
    },
    taskId: {
        type: String,
        ref: TaskModel.modelName
    }
}, {
    timestamps: true
})

const modelName = 'subtask';
module.exports = db.model(modelName, schema);