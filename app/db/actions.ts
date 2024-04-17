import { auth } from 'app/auth';
import { type Session } from 'next-auth';
import { sql } from './postgres';
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

async function getSession(): Promise<Session> {
    let session = await auth();
    if (!session || !session.user) {
      throw new Error('Unauthorized');
    }
    return session;
}

export async function saveGuestbookEntry(formData: FormData) {
    let session = await getSession();
    let email = session.user?.email as string;
    let created_by = session.user?.name as string;
  
    if (!session.user) {
      throw new Error('Unauthorized');
    }
  
    let entry = formData.get('entry')?.toString() || '';
    let body = entry.slice(0, 500);
  
    await sql`
      INSERT INTO guestbook (email, body, created_by, created_at)
      VALUES (${email}, ${body}, ${created_by}, NOW())
    `;
  
    revalidatePath('/guestbook');
  
    let data = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ys32809@gmail.com',
        to: 'singhyogesh2104@gmail.com',
        subject: 'Someone has created guestbook message',
        html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
      }),
    });
  
    let response = await data.json();
    console.log('Email sent', response);
  }

