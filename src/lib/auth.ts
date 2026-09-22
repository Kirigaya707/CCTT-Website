import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";

const ADMIN_EMAILS = [
  "chutichutitours@gmail.com",
  "admin.kolkata@chutichuti.in",
  "admin.durgapur@chutichuti.in",
  "admin.siliguri@chutichuti.in",
  "curator@chutichuti.in",
];

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM || "auth@chutichuti.in",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.email) {
        token.role = ADMIN_EMAILS.includes(user.email.toLowerCase())
          ? "admin"
          : "traveler";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role =
          typeof token.role === "string" ? token.role : "traveler";
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
