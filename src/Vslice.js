import { createSlice } from "@reduxjs/toolkit";

export const counterSlice6 = createSlice({
    name: 'counter6',
    initialState: {
        value: 0,
    },
    reducers: {
        div: (state6, action) => {
            let div1 = Number(action.payload.div1);
            let div2 = Number(action.payload.div2);
            let div3 = Number(action.payload.div3);
            state6.value = div1 / div2 / div3;
        },
    },
})

export const {div} = counterSlice6.actions

export default counterSlice6.reducer