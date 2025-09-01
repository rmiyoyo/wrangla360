import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/admin/login');

  const articles = await prisma.article.findMany();

  return (
    <div className="p-4">
      <h1>Admin Dashboard</h1>
      <form action="/api/articles" method="POST" className="mb-4">
        <input name="title" placeholder="Title" className="border p-2 mr-2" />
        <input name="excerpt" placeholder="Excerpt" className="border p-2 mr-2" />
        <textarea name="content" placeholder="Content" className="border p-2" />
        <input name="imageUrl" placeholder="Image URL" className="border p-2 mr-2" />
        <button type="submit" className="bg-blue-600 text-white p-2">Add Article</button>
      </form>
      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title} - <a href={`/admin/edit/${article.id}`}>Edit</a></li>
        ))}
      </ul>
    </div>
  );
}