const express = require("express");
const app = express();

const Anime = require("../models/anime");

app.get("/anime/:id", (req, res) => {
    const id = Number(req.params.id);

    Anime.findById(id, (err, dbAnime) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            dbAnime
        });
    });
});

app.get("/animes/:estado", (req, res) => {
    const estado = Number(req.params.estado);

    Anime.find({estado}).exec((err, animes) => {
        if(err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            animes
        });
    });
});

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