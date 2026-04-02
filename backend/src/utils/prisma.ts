import { PrismaClient } from '@prisma/client';

let prismaInstance: PrismaClient | null = null;

export const getPrisma = () => {
  if (!prismaInstance) {
    console.log('[PRISMA] Initializing new PrismaClient...');
    try {
      prismaInstance = new PrismaClient({
        log: ['error', 'warn'],
      });
    } catch (err) {
      console.error('[PRISMA] Critical failure during instantiation:', err);
      throw err;
    }
  }
  return prismaInstance;
};

// Defensive proxy to avoid top-level crash if env var is missing
export const prisma = new Proxy({} as PrismaClient, {
  get: (target, prop) => {
    const instance = getPrisma();
    return (instance as any)[prop];
  }
});
