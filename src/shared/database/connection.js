const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("database connected");
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
    }
}

module.exports = dbConnection;