import { PrismaClient } from "@prisma/client";
import logger from "./logging";

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'info'
    },
    {
      emit: 'event',
      level: 'error'
    },
    {
      emit: 'event',
      level: 'query'
    },
    {
      emit: 'event',
      level: 'warn'
    }
  ]
});

prisma.$on('error', (e) => logger.error(e));
prisma.$on('info', (e) => logger.info(e));
prisma.$on('query', (e) => logger.info(e));
prisma.$on('warn', (e) => logger.warn(e));

export default prisma;
