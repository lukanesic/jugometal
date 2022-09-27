import { connectToDbMong } from '../../../lib/db'
import Product from '../../../models/productModel'

export const getCategory = async () => {
  const data = await handler()
  return data
}

const handler = async (req, res) => {
  await connectToDbMong()
  const data = await Product.find({ category: '' })
  return data
}

export default handler
