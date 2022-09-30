import mongoose from 'mongoose'

const inquireSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },
    isRead: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Inquire =
  mongoose.models.Inquire || mongoose.model('Inquire', inquireSchema)

export default Inquire
