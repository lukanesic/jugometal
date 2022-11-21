import { connectToDbMong } from '../../../lib/db'
import Orders from './../../../models/orderModel'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await connectToDbMong()

    const data = await Orders.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      phone: req.body.phone,
      postal: req.body.postal,
      address: req.body.address,
      city: req.body.city,
      productTitle: req.body.productTitle,
      price: req.body.price,
      isRead: false,
    })

    res.status(200).json({ msg: 'arived', data })
  }
}

export default handler
