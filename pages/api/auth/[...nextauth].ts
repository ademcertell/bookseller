import NextAuth from "next-auth";
import { Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export interface CustomUser extends Session {
  // Define your custom user properties here
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    // ...add more providers here
  ],
  // You can add custom callbacks and configurations here
  callbacks: {
    // Add custom callbacks if needed
  },
  // Add custom session and user types
  session: {
    // Define your custom session properties here
  },
});
