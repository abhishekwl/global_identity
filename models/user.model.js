const mongoose = require('mongoose');
const moment = require('moment');

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true, default: null },
    email: { type: String, required: true, trim: true, default: null },
    password: { type: String, required: true, default: null },
    phone: { type: String, required: true, trim: true, default: null },
    image: { type: String, required: true, trim: true, default: null },
    address: { type: String, required: true, trim: true, default: null },
    timestamp_created: { type: Number, required: true, default: moment(new Date()).unix() },
    timestamp_modified: { type: Number, required: true, default: moment(new Date()).unix() }
});

module.exports = mongoose.model('user', userSchema);
