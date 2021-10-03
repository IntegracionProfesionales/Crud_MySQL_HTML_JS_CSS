const express = require("express");
const router = express.Router();



// Servidor API REST

app.get('', (req, res)=>{
    res.json(
        {
            mensaje: "Hell World"
        }
    )
});

app.get('/productos', (req, res)=>{
    res.json(
        {
            mensaje: "Heaven World"
        }
    )
});


module.exports = router;