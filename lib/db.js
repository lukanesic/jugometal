import mongoose from 'mongoose'

export const connectToDbMong = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
