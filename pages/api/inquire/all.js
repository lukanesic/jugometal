import Inquire from '../../../models/inquireModel'
import { connectToDbMong } from '../../../lib/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    await connectToDbMong()
    const data = await Inquire.find({})
    res.status(200).json(data)
  }
  return
}

export default handler
