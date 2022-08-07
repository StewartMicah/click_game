import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from '../features/currency/currencySlice'
import clickReducer from '../features/click/clickSlice'

export default configureStore({
  reducer: {
    currency: currencyReducer,
    click: clickReducer,
  }
})