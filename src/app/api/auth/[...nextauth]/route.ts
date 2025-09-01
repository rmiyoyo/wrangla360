import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        
        const user = await prisma.user.findUnique({ 
          where: { email: credentials.email } 
        });
        
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return { 
            id: user.id.toString(),
            email: user.email, 
            role: user.role 
          };
        }
        return null;
      },
    }),
  ],
  session: { strategy: 'jwt' as const },
  pages: { signIn: '/admin/login' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };