import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import TwitterProvider from 'next-auth/providers/twitter';
import { ROUTE } from 'lib/consts/routes';
import prisma from '../../../prisma';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: 'QwW72IpqpUjaHJSTNyLo6HV9HTJsqdq8T67PKptPFCQ=',
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_AUTH_ID),
      clientSecret: String(process.env.GOOGLE_AUTH_SECRET),
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_AUTH_ID,
      clientSecret: process.env.GITHUB_AUTH_SECRET,
      profile: profile => ({
        id: profile.id.toString(),
        name: profile.name || profile.login,
        email: profile.email,
        image: profile.avatar_url,
      }),
    }),
    TwitterProvider({
      clientId: String(process.env.TWITTER_AUTH_ID),
      clientSecret: String(process.env.TWITTER_AUTH_SECRET),
    }),
  ],
  pages: {
    signIn: `/${ROUTE.signIn}`,
  },
});
