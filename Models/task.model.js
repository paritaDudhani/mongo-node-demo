const db = require('mongoose');
const UUID = require('uuid');

const schema = new db.Schema({
    _id: {
        type: String,
        unique: true,
        default: UUID.v4
    },
    title: {
        type: String,
        required: true,
        set: value => value.trim()
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        set: value => value.trim()
    }
}, {
    timestamps: true
});

const modelName = 'task';
module.exports = db.model(modelName, schema);