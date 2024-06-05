import { createSlice } from "@reduxjs/toolkit";

export const counterSlice3 = createSlice({
    name: 'counter3',
    initialState: {
        value: 0,
    },
    reducers: {
        mul: (state3, action) => {
            state3.value = action.payload.multiplier * action.payload.multiplicand * action.payload.multiplithird;
        },
    },
})

export const {mul} = counterSlice3.actions

export default counterSlice3.reducer