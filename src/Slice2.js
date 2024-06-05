import { createSlice } from "@reduxjs/toolkit";

export const counterSlice2 = createSlice({
    name: 'counter2',
    initialState: {
        value2: 0,
    },
    reducers: {
        increment2:(state2) => {
            state2.value2 += 2
        },
        decrement2: (state2) => {
            state2.value2 -= 2
        },
        incrementByAmount: (state2, action) => {
            state2.value2 += action.payload
        },
    },
})

export const {increment2, decrement2, incrementByAmount} = counterSlice2.actions

export default counterSlice2.reducer