import { connectToDbMong } from '../../../lib/db'
import { comparePasswords } from '../../../lib/passwords'
import User from '../../../models/userModel'

export const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body

    console.log(email, password)
  }

  return
}
