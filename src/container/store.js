import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        singleProduct: singleProductSlice
    }
})

export default store;