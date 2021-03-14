const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/dbConnection');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;

        this.database();
        this.middlewares();
        this.routes();
    }

    async database() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/api/usuarios", require('./routes/usuariosRoutes'));
        this.app.use("/api/listas", require('./routes/listasRoutes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen on port", this.port);
        });
    }
}

module.exports = Server;