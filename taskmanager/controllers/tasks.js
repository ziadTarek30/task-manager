let Task = require("../models/Task");
let asyncWrapper = require("../middleware/async");
const CustomError = require("../error/customError");

const getTasks = asyncWrapper(async (req, res) => { // function is invoked
        let tasks = await Task.find({});
        res.status(200).json({tasks});
    })
    
const createTask = asyncWrapper(async (req, res) => {
        let newTask = await Task.create(req.body);
        res.status(201).json({newTask});
    
})
const getTask = asyncWrapper( async (req, res, next) => {
        let task = await Task.findOne({_id: req.params.id})
        if (!task) {
            return next(new CustomError("Invalid ID", 404));
            // return res.status(404).json({error: "invalid ID"}); // if ID length is correct but doesn't exist
        }
        return res.status(200).json({task});
        // res.status(500).json({msg: error.message}); // if ID doesn't match the length of collection ID's
    
})
const updateTask = asyncWrapper(async (req, res) => {
        let task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true,
            // overwrite: true // we add this option for put requests and remove the default validator for completed
            // put requests updates the items passed and removes rest of items but patch keeps the rest of items
        })
        if (!task) {
            return next(new CustomError("Invalid ID", 404));
            // return res.status(404).json({error: "invalid ID"}); // if ID length is correct but doesn't exist
        }
        res.status(200).json({task});
})
const deleteTask = asyncWrapper(async (req, res) => {
        let task = await Task.findOneAndDelete({_id: req.params.id})
        if (!task) {
            return next(new CustomError("Invalid ID", 404));
            // return res.status(404).json({error: "invalid ID"}); // if ID length is correct but doesn't exist
        }
        res.status(200).json({task});
})

module.exports = {getTasks, getTask, createTask, updateTask, deleteTask};

