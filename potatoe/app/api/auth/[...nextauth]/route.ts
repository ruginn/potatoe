import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '', 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }), 
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID ?? '', 
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
      })
    ]
  };
  
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };



