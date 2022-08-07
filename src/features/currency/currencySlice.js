import { createSlice } from '@reduxjs/toolkit'

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    value: 0
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decreaseByAmount: (state, action) => {
      state.value -= action.payload
    }
  }
})

export const { incrementByAmount, decreaseByAmount } = currencySlice.actions

export default currencySlice.reducer