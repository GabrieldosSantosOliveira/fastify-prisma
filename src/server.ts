import Fastify from "fastify";
import { config } from "dotenv";
import { UserRoutes } from "./routes/UserRoutes";
config();
const fastify = Fastify({
  logger: true,
});
fastify.register(UserRoutes);

const PORT = Number(process.env.PORT) || 3333;
fastify.listen({ port: PORT }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
