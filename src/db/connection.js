const mongoose = require('mongoose');
require('dotenv').config(); // gets the environment variable we made in .env


const connection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Successfully connected to MongoDB")
    } catch (error) {
        console.log(error);
    }
};

connection();