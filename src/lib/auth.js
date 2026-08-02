import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGODB_URI);

await client.connect();

const db = client.db("studynook");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  trustedOrigins: ["http://localhost:3000", "https://studynook-client-bice.vercel.app"],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENTID, 
            clientSecret: process.env.GOOGLE_SECRET, 
        }, 
    },
    session: {
      cookieCache: {
        enabled: true,
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
      }
    },
    plugins: [
      jwt()
    ]
});