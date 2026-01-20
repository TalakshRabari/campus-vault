import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const allowedDomains = ["dau.ac.in", "daiict.ac.in"]

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false
      console.log("Logged in email:", user.email)

      const domain = user.email.split("@")[1]
      return allowedDomains.includes(domain)
    }
  }
})

export { handler as GET, handler as POST }
