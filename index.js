import express from 'express';
import bodyParser from "body-parser";
require('dotenv').config()

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3008
app.listen(PORT, () => {
    console.log(`Server is running on the port: ${PORT}`)
})