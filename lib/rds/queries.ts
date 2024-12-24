import { db } from './drizzle';
import { users } from './schema';
import { eq } from 'drizzle-orm';
import type { User, NewUser } from './schema';

// Create a new user
export async function createUser(data: NewUser) {
  return await db.insert(users).values(data).returning();
}

// Get a user by email
export async function getUserByEmail(email: string) {
  return await db.select().from(users).where(eq(users.email, email)).limit(1);
}

// Get a user by ID
export async function getUserById(id: number) {
  return await db.select().from(users).where(eq(users.id, id)).limit(1);
}

// Update a user's account details
export async function updateUser(id: number, updates: Partial<User>) {
  return await db.update(users).set(updates).where(eq(users.id, id)).returning();
}

// Delete a user by ID
export async function deleteUser(id: number) {
  return await db.delete(users).where(eq(users.id, id)).returning();
}

// Update a user's Stripe details
export async function updateStripeDetails(
    id: number,
    stripeCustomerId: string | null,
    stripeSubscriptionId: string | null,
    stripeProductId: string | null
  ) {
    return await db
      .update(users)
      .set({
        stripeCustomerId,
        stripeSubscriptionId,
        stripeProductId,
      })
      .where(eq(users.id, id))
      .returning();
  }

// Update keywords and associated embeddings
export async function updateKeywords(
  id: number,
  keywords: any[],
  extendedKeywords: any[] | null,
  keywordEmbeddings: any[] | null,
  extendedKeywordEmbeddings: any[] | null
) {
  return await db
    .update(users)
    .set({
      keywords,
      extendedKeywords,
      keywordEmbeddings,
      extendedKeywordEmbeddings,
    })
    .where(eq(users.id, id))
    .returning();
}

// Get all users on a specific plan
export async function getUsersByPlan(plan: string) {
  return await db.select().from(users).where(eq(users.plan, plan));
}


// Get all users scheduled for delivery on a specific day
export async function getUsersByDeliveryDay(day: string) {
  return await db.select().from(users).where(eq(users.deliveryDay, day));
}
