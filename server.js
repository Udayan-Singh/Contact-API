const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();


const app = express();
app.use(cookieParser());
connectDb();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/students', require('./routes/contactRoutes'));
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler);

app.get("/", (req,res) => {
    res.send("Hello")
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})