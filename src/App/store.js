import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../Features/CounterSlice'
export default configureStore({
  reducer: {
    counter:CounterSlice
  }
})