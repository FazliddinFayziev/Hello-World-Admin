import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";
import editProductSlice from "./editProductSlice";
import uploadSingleProduct from "./uploadSingleProduct";
import deleteProductSlice from "./deleteProductSlice";

const store = configureStore({
    reducer: {
        products: productSlice,
        editProduct: editProductSlice,
        singleProduct: singleProductSlice,
        deleteProduct: deleteProductSlice,
        uploadProduct: uploadSingleProduct,
    }
})

export default store;