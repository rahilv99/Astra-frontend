import { db } from './drizzle';
import { users } from './schema';
import { eq } from 'drizzle-orm';
import type { User, NewUser } from './schema';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth/session';


// get user from session
export async function getUser() {
  const sessionCookie = (await cookies()).get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (
    !sessionData ||
    !sessionData.user ||
    typeof sessionData.user.id !== 'number'
  ) {
    return null;
  }

  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }

  const user = await db.select().from(users).where(eq(users.id, sessionData.user.id)).limit(1);

  if (user.length === 0) {
    return null;
  }

  return user[0];
}

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

// Stripe 

// Get a user by Stripe customer ID
export async function getUserByStripeCustomerId(stripeCustomerId: string) {
  return await db.select().from(users).where(eq(users.stripeCustomerId, stripeCustomerId)).limit(1);
}

// Update a user's Stripe details
export async function updateUserSubscription(id: number, subscriptionData: {
  stripeSubscriptionId: string | null;
  stripeProductId: string | null;
  planName: string | null;
}) {
  return await db.update(users).set(subscriptionData).where(eq(users.id, id)).returning();
}

// Get all users on a specific plan
export async function getUsersByPlan(plan: string) {
  return await db.select().from(users).where(eq(users.plan, plan));
}


// Get all users scheduled for delivery on a specific day
export async function getUsersByDeliveryDay(day: number) {
  return await db.select().from(users).where(eq(users.deliveryDay, day));
}
