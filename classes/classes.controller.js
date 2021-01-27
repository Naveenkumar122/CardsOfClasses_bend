const express = require('express');
const Service = require('./classes.services');


const router = express.Router();

router.get('/',getData);
router.get('/:id',getByID);


//exporting router for attendance module
module.exports = router;

function getData(req,res){
    Service.getData()
        .then(data => data ? res.status(200).json(data) : res.status(400).json({ message: 'resource not found' }))
        .catch(err => res.json(err));
}

function getByID(req,res){
    Service.getByID(req.params.id)
        .then(data => data ? res.status(200).json(data) : res.status(400).json({ message: 'resource not found' }))
        .catch(err => res.json(err));
}
