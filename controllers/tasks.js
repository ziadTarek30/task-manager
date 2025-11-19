let Task = require("../models/Task");
let asyncWrapper = require("../middleware/async");
const CustomError = require("../error/customError");

const getTasks = asyncWrapper(async (req, res) => {
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
        }
        return res.status(200).json({task});
    
})
const updateTask = asyncWrapper(async (req, res) => {
        let task = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true,
        })
        if (!task) {
            return next(new CustomError("Invalid ID", 404));
        }
        res.status(200).json({task});
})
const deleteTask = asyncWrapper(async (req, res) => {
        let task = await Task.findOneAndDelete({_id: req.params.id})
        if (!task) {
            return next(new CustomError("Invalid ID", 404));
        }
        res.status(200).json({task});
})

module.exports = {getTasks, getTask, createTask, updateTask, deleteTask};

