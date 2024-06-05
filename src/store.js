import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice";
import counterReducer2 from "./Slice2";
import counterReducer3 from "./Xslice";
import counterReducer4 from "./Aslice";
import counterReducer5 from "./Dslice";
import counterReducer6 from "./Vslice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        counter2: counterReducer2,
        counter3: counterReducer3,
        counter4: counterReducer4,
        counter5: counterReducer5,
        counter6: counterReducer6,
    },
})