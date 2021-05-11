const mongoose = require("mongoose");
const htmlRoutes = require('./routes/htmlroutes');
const apiRoutes = require('./routes/apiroutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))
app.use(apiRoutes)
app.use(htmlRoutes)

//Starts Server to begin listening 
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

