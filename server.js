const express = require("express")
const mongoose = require("mongoose")

const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config();

const app = express()

const routers = require("./routes/routes");
const authRoute = require("./routes/userRoutes");

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://localhost", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, async () => {
    console.log("The database is successfully connected")
})

app.use("/", routers)
app.use("/", authRoute);

app.listen(5000, () => {
    console.log("The server is running on port 5000")
})