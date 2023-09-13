// server.js
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Define el router utilizando el archivo db.json
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

// Configura middleware para manejar CORS (peticiones cruzadas)
server.use(middlewares);

// Usa el router de json-server para todas las rutas
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
