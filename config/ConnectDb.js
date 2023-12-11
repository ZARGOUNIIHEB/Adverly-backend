const mongoose = require('mongoose');

const ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://ihebzargounipr:jyntZp0uxvXzeTqS@cluster0.jjgehee.mongodb.net/e_annonce?retryWrites=true&w=majority');
        console.log('You are connected to your database EAnnonce');
    } catch (err) {
        console.log(err)
    }
}

module.exports = ConnectDb;