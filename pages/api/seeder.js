import { connectToDbMong } from '../../lib/db'
import { products } from '../../models/productSeeder'
import Product from './../../models/productModel'

const handler = async (req, res) => {
  await connectToDbMong()

  await Product.insertMany(products)
}

export default handler
