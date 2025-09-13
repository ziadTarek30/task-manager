const express = require("express");
const tasksRouter = require("./routes/tasks");
let connectDB =  require("./db/connect");
let notFound = require("./middleware/notFound")
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.static("./public"))
app.use(express.json());
app.use("/api/v1/tasks", tasksRouter);
app.use(errorHandler);
app.all(/.*/, notFound);


const port = process.env.PORT || 3000
connectDB(process.env.MONGO_URI)
.then(() => app.listen(port, console.log("listening on port " + port)))
.catch((error) => console.log(error));
