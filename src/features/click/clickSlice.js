import { createSlice } from '@reduxjs/toolkit'

export const clickSlice = createSlice({
  name: 'click',
  initialState: {
    value: 1
  },
  reducers: {
    double: (state) => {
      let doubledState = state.value * 2;
      state.value = doubledState
    }
  }
})

export const { double } = clickSlice.actions

export default clickSlice.reducer