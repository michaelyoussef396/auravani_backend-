const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db", "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

const PORT = process.env.PORT || 3000;

// Add custom routes before JSON Server router
server.get('/__rules', (req, res) => {
  // Handle the custom route here, for example, send a JSON response
  res.jsonp({ message: 'This is the __rules route' });
});

// Use default router
server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
