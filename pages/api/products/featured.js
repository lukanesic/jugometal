import { connectDatabase } from '../../../lib/db'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const client = await connectDatabase()
    const db = client.db('jugobase')
    const data = await db
      .collection('products')
      .find({ featured: true })
      .toArray()

    res.json(data)
    client.close()
  }
}

export default handler
