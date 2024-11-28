import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { POST as login } from "../../login/route";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        try {
          const res = await login({
            email: credentials.email,
            password: credentials.password,
          });
          const user = await res.json();
          if (res.status !== 200) {
            return null;
          }
          return user.message;
        } catch (err: any) {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
