import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    lastNumber: 0,
    numberOfPages: 0,
  },
  reducers: {
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