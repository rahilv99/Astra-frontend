import { pgTable, serial, text, varchar, jsonb, integer } from 'drizzle-orm/pg-core';

// Define the user table schema
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  deliveryDay: varchar('delivery_day', { length: 50 }).notNull(),
  keywords: jsonb('keywords').notNull(),
  extendedKeywords: jsonb('extended_keywords'),
  keywordEmbeddings: jsonb('keyword_embeddings'),
  extendedKeywordEmbeddings: jsonb('extended_keyword_embeddings'),
  role: varchar('role', { length: 20 }).notNull().default('other'),
  stripeCustomerId: text('stripe_customer_id').unique(),
  stripeSubscriptionId: text('stripe_subscription_id').unique(),
  stripeProductId: text('stripe_product_id'),
  plan: varchar('plan', { length: 50 }).notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
}