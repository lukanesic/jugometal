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
      spec1: req.body.spec1,
      spec2: req.body.spec2,
      spec3: req.body.spec3,
      spec4: req.body.spec4,
      spec5: req.body.spec5,
      mpcena: req.body.mpcena,
      vpcena: req.body.vpcena,
    })

    res.status(200).json({ msg: 'arived', data })
  }
  return
}

export default handler
