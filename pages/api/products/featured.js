import { connectToDbMong } from '../../../lib/db'
import Product from '../../../models/productModel'

export const getFeatured = async () => {
  const data = await handler()
  return data
}

const handler = async (req, res) => {
  await connectToDbMong()
  const data = await Product.find({ featured: true })
  return data
}

export default handler
