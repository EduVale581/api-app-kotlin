import { FastifyInstance } from "fastify";

export default async function indexRoutes(app: FastifyInstance) {
  app.get("/", async (req, reply) => {
    return reply.send({
      message: "Ok",
    });
  });
}
