import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    seoKey: {
      type: String,
      required: true,
    },
    searchKey: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    spec1: {
      type: String,
      required: true,
    },
    spec2: {
      type: String,
      required: true,
    },
    spec3: {
      type: String,
      required: true,
    },
    spec4: {
      type: String,
      required: true,
    },
    spec5: {
      type: String,
      required: true,
    },
    featured: Boolean,
  },
  {
    timestamps: true,
  }
)

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
