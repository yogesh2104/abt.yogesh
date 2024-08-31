

# https://abt-yogesh.vercel.app

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Database**: [Postgres provided by vercel](https://vercel.com/postgres)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **UI**: [Shadcn UI](https://ui.shadcn.com) [Aceternity UI](https://ui.aceternity.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Running Locally

```bash
git clone https://github.com/yogesh2104/abt.yogesh.git
cd abt.yogesh
pnpm install
pnpm run dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/yogesh2104/abt.yogesh/blob/main/.env.example).

## Database Schema

```sql
CREATE TABLE guestbook (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    body TEXT,
    created_by VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

