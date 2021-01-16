const express = require("express");
const app = express();

const Anime = require("../models/anime");

app.post("/anime", (req, res) => {
    
    const body = req.body;

    let anime = new Anime({
        nombre: body.nombre,
        estado: body.estado
    });

    anime.save((err, dbAnime) => {
        
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            anime: dbAnime
        });
    });
});

module.exports = app;