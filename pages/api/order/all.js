import Orders from './../../../models/orderModel'
import { connectToDbMong } from '../../../lib/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    await connectToDbMong()
    const data = await Orders.find({}).sort({ createdAt: -1 })
    res.status(200).json(data)
  }
  return
}

export default handler
