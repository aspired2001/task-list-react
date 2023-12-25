const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser'); // Add this line

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // Add this line


mongoose.connect(process.env.MONGODB_URI, 
{
    useNewUrlParser: true, 
    // useUnifiedTopology: true
 });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const tasksRouter = require('./routes/tasks');

app.use('/tasks', tasksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
