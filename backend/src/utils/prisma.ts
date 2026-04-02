import { PrismaClient } from '../generated/client';

let prismaInstance: PrismaClient;

export const getPrisma = () => {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
  }
  return prismaInstance;
};

export const prisma = new Proxy({} as PrismaClient, {
  get: (target, prop) => {
    return (getPrisma() as any)[prop];
  }
});
