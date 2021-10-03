const express = require('express');
const cors = require('cors');
const db = require('../database/conexion');
const app = express();

// Settings

//Middlewares
// Acciones que se ejecutan antes de que se exploren las rutas
app.use(express.urlencoded({extended:false}));
// Convertir de JSON a Variables:
app.use(express.json());
// Guardamos el puerto como una variable
const PORT = process.env.PORT || 3000;

app.use(cors());



// Servidor API REST
// Routers: Enrutamiento según la petición hecha en la página Web.
// PENDIENTE: Mover todas las peticiones al archivo:
// app.use(require('./routes/movimiento'));
app.get('/productos', (req, res)=>{
    let consulta_sql = "SELECT * FROM flujo";
    db.query(consulta_sql, (err, data)=>{
        if(err){
             return err;
        } else {
            res.json({
                nombre_envia: "un nombre",
                nombre_recibe: "otro nombre",
                tipo_recurso: "un recurso",
                cantidad: 4,
                FechaHora: "2015-12-20 10:01:00",
                data
            });
        }
    });
});

app.listen(PORT, () => {
    console.log('Servidor on Port: '+ PORT);
});