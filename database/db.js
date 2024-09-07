const mongoose = require('mongoose');


const connectToDB = async () => {
    await mongoose.
    connect('mongodb+srv://user1:admin@cluster.g2ob4.mongodb.net/crud')
    .then((res) => {
        console.log('Connected to MongoDB...');
    })

}

module.exports = connectToDB;