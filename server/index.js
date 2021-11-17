require('dotenv').config();
const express = require('express');
const app = express();

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

const mongoose = require('mongoose');
const connectDB = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@movie.u8gci.mongodb.net/movie?retryWrites=true&w=majority`)
        console.log("mongodb connect")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
};
connectDB();

app.use(express.json());
app.use('/api/auth', authRouter )
app.use('/api/posts', postRouter )

const PORT = 5000; 

app.listen(PORT, ()=>{console.log(`App started with PORT ${PORT}`)})


