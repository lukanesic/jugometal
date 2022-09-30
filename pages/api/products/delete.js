import { connectToDbMong } from '../../../lib/db'
import Product from '../../../models/productModel'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const id = req.body
    await connectToDbMong()
    await Product.findByIdAndDelete(id)

    res.status(200).json({ msg: 'Deleted' })
  }
  return
}

export default handler
