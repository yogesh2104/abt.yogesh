"use server"
import { auth } from 'app/auth';
import { type Session } from 'next-auth';
import { sql } from "@vercel/postgres";
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

async function getSession(): Promise<Session> {
    let session = await auth();
    if (!session || !session.user) {
      throw new Error('Unauthorized');
    }
    return session;
}

export async function saveGuestbookEntry(text:string) {
    let session = await getSession();
    let email = session.user?.email as string;
    let created_by = session.user?.name as string;
  
    if (!session.user) {
      throw new Error('Unauthorized');
    }
  
    let entry = text;
    let body = entry.slice(0, 500);
  
    await sql`
      INSERT INTO guestbook (email, body, created_by, created_at)
      VALUES (${email}, ${body}, ${created_by}, NOW())
    `;
  
    revalidatePath('/guestbook');

  }

