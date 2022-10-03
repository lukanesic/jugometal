import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDbMong } from '../../../lib/db'
import { comparePasswords } from '../../../lib/passwords'
import User from '../../../models/userModel'

export default NextAuth({
  session: {
    jwt: true,
    secret: process.env.SECRET,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials

        await connectToDbMong()
        const user = await User.findOne({ email: email })

        if (!user) {
          throw new Error('Email not found')
          return
        }

        const isEqual = await comparePasswords(password, user.password)
        if (!isEqual) {
          throw new Error('Incorect password')
          return
        }

        return {
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
})
