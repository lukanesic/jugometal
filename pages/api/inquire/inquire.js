import Inquire from '../../../models/inquireModel'
import { connectToDbMong } from '../../../lib/db'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await connectToDbMong()

    const data = await Inquire.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
      productTitle: req.body.productTitle,
      productId: req.body.productId,
      isRead: false,
    })

    res.status(200).json({ msg: 'arived', data })
  }
  return
}

export default handler
