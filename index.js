const express = require("express");
const path = require('path');
const app = express();
const port = 3000;

// configuracion de la carpeta public

app.use(express.static(path.join(__dirname, 'public')))

// ruta raiz de la app.html
// la req es la peticion y la res es la respuesta
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

//inicio de servidor escuchando en el puerto

app.listen(port, (req, res) => {
  console.log(`Iniciando app To_Do_List_DWS en http://localhost:${port}`);
});

