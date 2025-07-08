const { response } = require('express');
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('project').collection('contacts').find();
    result.tuArray().then((users) => {
        res.setHeader('Contect-Type', 'application/json');
        res.status(200).json(users);
    });
};

const getSingle = async (req, res) =>{
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('users').collection('users').find({_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};