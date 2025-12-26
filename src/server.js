import express, { json } from 'express';
import cors from 'cors';
import { serve, setup } from 'swagger-ui-express';

import dbConnection from './shared/database/connection.js';
import swaggerV1 from './docs/v1/swagger.js';

import apiV1 from './api/v1/index.js';

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
        this.app.use(json());
    }

    routes() {
        this.app.use("/api/v1", apiV1);
        // this.app.use("/api/v2", import('./api/v2'));
    }

    swagger() {
        this.app.use("/api/docs/v1", serve, setup(swaggerV1));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Listen on port", this.port);
            console.log(`Docs v1 → http://localhost:${this.port}/api/docs/v1`);
        });
    }
}

export default Server;