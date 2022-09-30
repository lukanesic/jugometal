import Inquire from '../../../models/inquireModel'
import { connectToDbMong } from '../../../lib/db'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const id = req.body.id
    const value = req.body.value

    await connectToDbMong()

    const update = await Inquire.updateOne(
      { _id: id },
      { $set: { isRead: value } }
    )

    res.status(200).json({ msg: 'Updated' })
  }
  return
}

export default handler
