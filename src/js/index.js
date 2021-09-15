const express = require('express');
const app = express();

// Settings

//Middlewares
// Acciones que se ejecutan antes de que se exploren las rutas
app.use(express.json());

// Routes
app.use(require('./routes/movimiento'));

app.listen(3000, () => {
    console.log('Server on Port 3000');
})