const express = require("express");
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use('/openai', require('./routes/openAIRoutes'))

app.listen(port, (req, res)=>{
    console.log(`Server is running in port ${port}`);
})