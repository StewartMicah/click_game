import { createSlice } from '@reduxjs/toolkit'

export const intervalSlice = createSlice({
  name: 'interval',
  initialState: {
    value: 0
  },
  reducers: {
    addAmount: (state, action) => {
      state.value += action.payload
    },
    multiplyAmount: (state, action) => {
      state.value *= action.payload
    }
  }
})

export const { addAmount, multiplyAmount } = intervalSlice.actions

export default intervalSlice.reducer