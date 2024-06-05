import { createSlice } from "@reduxjs/toolkit";

export const counterSlice5 = createSlice({
    name: 'counter5',
    initialState: {
        value: 0,
    },
    reducers: {
        dec: (state5, action) => {
            let dec1 = Number(action.payload.dec1);
            let dec2 = Number(action.payload.dec2);
            let dec3 = Number(action.payload.dec3);
            state5.value = dec1 - dec2 - dec3;
        },
    },
})

export const {dec} = counterSlice5.actions

export default counterSlice5.reducer