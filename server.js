// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

// Configura middleware para manejar CORS (peticiones cruzadas)
server.use(middlewares);

// Agrega una ruta personalizada para obtener un video por su ID
server.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  // El servidor JSON de json-server manejará automáticamente esta solicitud
  // y devolverá el video correspondiente si existe
  // No es necesario buscar el video manualmente aquí
});

// Usa el router de json-server
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
