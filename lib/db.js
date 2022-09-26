// import { MongoClient } from 'mongodb'

// export const connectDatabase = async () => {
//   const response = await MongoClient.connect(process.env.MONGODB_URI)

//   return response
// }

import mongoose from 'mongoose'

export const connectToDbMong = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
