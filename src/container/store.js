import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";
import editProductSlice from "./editProductSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        editProduct: editProductSlice,
        singleProduct: singleProductSlice,
    }
})

export default store;