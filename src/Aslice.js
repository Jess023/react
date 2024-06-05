import { createSlice } from "@reduxjs/toolkit";

export const counterSlice4 = createSlice({
    name: 'counter4',
    initialState: {
        value: 0,
    },
    reducers: {
        add: (state4, action) => {
            let add1 = Number(action.payload.add1);
            let add2 = Number(action.payload.add2);
            let add3 = Number(action.payload.add3);
            state4.value = add1 + add2 + add3;
        },
    },
})

export const {add} = counterSlice4.actions

export default counterSlice4.reducer