import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import searchSlice from './slices/searchSlice'

export const store = configureStore({
  reducer: {
    search: searchSlice,
    cart: cartSlice,
  },
})
