const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const dbConnection = require('./shared/database/connection');
const swaggerV1 = require('./docs/v1/swagger');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;

        this.database();
        this.middlewares();
        this.routes();
        this.swagger();
    }

    async database() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use("/api/v1", require('./api/v1'));
        // this.app.use("/api/v2", require('./api/v2'));
    }

    swagger() {
        this.app.use("/api/docs/v1", swaggerUi.serve, swaggerUi.setup(swaggerV1));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen on port", this.port);
            console.log(`Docs v1 → http://localhost:${this.port}/api/docs/v1`);
        });
    }
}

module.exports = Server;