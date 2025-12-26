import { connect } from 'mongoose';

const dbConnection = async () => {
    try {
        await connect(process.env.MONGODB_URI);
        console.log("database connected");
    } catch (error) {
        console.log(error);
        throw new Error("Error al conectar a la base de datos");
    }
}

export default dbConnection;