
var express = require('express');
var router = express.Router();
var newTask = require('../models/dataSchema');

router.post('/create', (req,res,next) => {
    var task = newTask({
        name:req.body.name,
        time:req.body.time
    });

    task.save((err, task)=>{
        if(err){
            res.status(500).json({errmsg: 'Failed to add new user:'+err});
        }
        res.status(200).json({msg: task});
    });
});

router.get('/read', (req,res,next) => {
    newTask.find({}, (err, tasks)=>{
        if(err){
            res.status(500).json({errmsg: 'Failed to pull data from database:'+err});
        }
        res.status(200).json({msg: tasks});
    });

});

router.put('/update', (req,res,next) => {
    newTask.findById(req.body._id, (err, task)=>{
        if(err){
            res.status(500).json({errmsg: 'Failed to find data to update:'+err});
        }
        task.name=req.body.name;
        task.time=req.body.time;

        task.save((err,task)=>{
            if(err){
                res.status(500).json({errmsg: 'Failed to find data to update:'+err});
            }
            res.status(200).json({msg: task});
        });
    });
});

router.delete('/delete/:id', (req,res,next) => {
    newTask.findOneAndRemove({_id: req.params.id},(err, task)=>{
        if(err){
            res.json({msg: 'delete err'});
            res.status(500).json({errmsg: 'Failed to delete data:'+err});
        }
        res.status(200).json({msg: task});
    });
});

module.exports = router;