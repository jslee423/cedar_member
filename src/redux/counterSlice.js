import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    lastNumber: 0,
    numberOfPages: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setLastNumber: (state, action) => {
        state.lastNumber = action.payload
    },
    setNumberOfPages: (state, action) => {
        state.numberOfPages = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setLastNumber, setNumberOfPages } = counterSlice.actions

export default counterSlice.reducer