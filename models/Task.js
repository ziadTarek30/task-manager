const mongoose = require("mongoose");

let taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlength: [20, "name must be bigger than 20 charachters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", taskSchema);