const express = require('express');
const app = express();
const PORT = 3000;

//endpoint que responde con un mensaje de bienvenida
app.get('/', (req, res) => {
    res.send('Integración continua funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});