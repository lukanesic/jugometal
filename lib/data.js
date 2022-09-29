import { connectToDbMong } from './db'
import Product from '../models/productModel'
import Inquire from '../models/inquireModel'
// import { connectDatabase } from './db'
// ovo mora da bude posle domen koji ce da se koristi umesto localhost pri production.
// imaces problem tako da znas gde da trazis

export const fetchAll = async () => {
  await connectToDbMong()
  const data = await Product.find({})
  return data
}

// export const projectPaths = async () => {
//   const client = await connectDatabase()
//   const db = client.db('test')
//   const data = await db
//     .collection('products')
//     .find({})
//     .project({ category: 1 })
//     .toArray()
//   return data
// }

export const fetchFeatured = async () => {
  await connectToDbMong()
  const data = await Product.find({ featured: true })
  return data
}

export const fetchCategory = async (category) => {
  await connectToDbMong()
  const data = await Product.find({ category: category })
  return data
}

export const fetchSubcategory = async (subcategory) => {
  await connectToDbMong()
  const data = await Product.find({ subcategory: subcategory })
  return data
}

export const fetchProduct = async (url) => {
  await connectToDbMong()
  const data = await Product.find({ url: url })
  return data
}

export const fetchMessages = async () => {
  await connectToDbMong()
  const data = await Inquire.find({})
  return data
}
