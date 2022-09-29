import { connectToDbMong } from '../../lib/db'
import { users } from '../../models/userSeeder'
import User from './../../models/userModel'

const handler = async (req, res) => {
  await connectToDbMong()
  await User.insertMany(users)
}

export default handler
