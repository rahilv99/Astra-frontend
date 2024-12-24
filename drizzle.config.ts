import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/rds/schema.ts',
  out: './lib/rds/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
} satisfies Config;
