import { FastifyInstance } from "fastify";

export const UserRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", (req, reply) => {
    return reply.send({ hello: "Hello World" });
  });
};
