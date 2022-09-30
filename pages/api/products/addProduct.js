import { connectToDbMong } from '../../../lib/db'
import Product from '../../../models/productModel'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    await connectToDbMong()
    const data = await Product.create({
      title: req.body.title,
      category: req.body.category,
      subcategory: req.body.subcategory,
      url: req.body.url,
      image: req.body.image,
      description: req.body.description,
      about: req.body.about,
      seoKey: req.body.seoKey,
      searchKey: req.body.searchKey,
    })

    res.status(200).json({ msg: 'arived', data })
  }
  return
}

export default handler
