import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
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
    postal: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    productTitle: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
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

const Orders = mongoose.models.Orders || mongoose.model('Orders', orderSchema)

export default Orders
