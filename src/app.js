const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const dbUser = process.env.MONGODB_USER;
const dbPass = process.env.MONGODB_PASS;
const dbName = process.env.MONGODB_NAME;

const dbURI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.5v2lk.mongodb.net/${dbName}`;

const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useCreateIndex", true);

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require("./routes/routes"));

mongoose.connect(dbURI, (err, res) => {
    if (err) throw err;
    console.log("base de datos conectada");
});

app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});