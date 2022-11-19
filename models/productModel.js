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
    mpcena: {
      type: Number,
    },
    vpcena: {
      type: Number,
    },
    spec1: {
      type: String,
    },
    spec2: {
      type: String,
    },
    spec3: {
      type: String,
    },
    spec4: {
      type: String,
    },
    spec5: {
      type: String,
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
