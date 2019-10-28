const moment = require('moment');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { respond } = require('../util');

exports.createUser = (request, response) => {
    const name = request.body.name;
    const email = request.body.email;
    const plaintextPassword = request.body.password;
    const phone = request.body.phone || null;
    const image = request.body.image || null;
    const address = request.body.address || null;
    bcrypt.hash(plaintextPassword, 10, (errorHash, hashedPassword) => {
        if(errorHash) respond(errorHash, null, request, response);
        else {
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword,
                phone: phone,
                image: image,
                address: address
            });
            newUser.save((error, data) => respond(error, data, request, response));
        }
    });    
};

exports.getAllUser = (request, response) => User.find({}, (error, data) => respond(error, data, request, response));

exports.getUser = (request, response) => User.findById(request.params._id, (error, data) => respond(error, data, request, response));

exports.updatePassword = (request, response) => {
    const newPlaintextPassword = request.body.password;
    bcrypt.hash(newPlaintextPassword, 10, (errorHash, hashedPassword) => {
        if(errorHash) respond(errorHash, null, request, response);
        else User.findByIdAndUpdate(request.params._id, { $set: { 'password': hashedPassword } }, { new: true }, (error, data) => respond(error, data, request, response));
    });
};

exports.deleteUser = (request, response) => User.findByIdAndRemove(request.params._id, (error, data) => respond(error, data, request, response));
