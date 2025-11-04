import Fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import path from "path";
import fs from "fs";
import uploadRoutes from "./routes/upload.routes";
import indexRoutes from "./routes/index.routes";

const app = Fastify({ logger: true });
const UPLOAD_DIR = path.join(process.cwd(), "uploads");

// Crear carpeta uploads si no existe
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

// Plugins
app.register(fastifyMultipart);
app.register(fastifyStatic, {
  root: UPLOAD_DIR,
  prefix: "/files/",
});

// Rutas
app.register(uploadRoutes, { prefix: "/api" });
app.register(indexRoutes, { prefix: "/" });

// Servidor
const start = async () => {
  try {
    await app.listen({ port: 3000, host: "0.0.0.0" });
    console.log("🚀 Servidor corriendo en http://localhost:3000");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
