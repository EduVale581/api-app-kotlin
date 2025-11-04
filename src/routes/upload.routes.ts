import { FastifyInstance } from "fastify";
import { saveFile } from "../utils/fileUtils";

export default async function uploadRoutes(app: FastifyInstance) {
  app.post("/upload", async (req, reply) => {
    const parts = req.parts();

    const urls: string[] = [];

    for await (const part of parts) {
      if (part.type === "file") {
        const fileUrl = await saveFile(part, req);
        urls.push(fileUrl);
      }
    }

    if (urls.length === 0) {
      return reply.status(400).send({ error: "No se recibieron archivos" });
    }

    return reply.send({
      message: "Archivos subidos correctamente",
      files: urls.map((url) => ({ url })),
    });
  });
}
