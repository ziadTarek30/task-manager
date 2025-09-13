const CustomError = require("../error/customError");

let errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError)
        return res.status(err.status).json({error: err.message});
    return res.status(500).json({msg: "Error in server"});
}

module.exports = errorHandler;