import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";
import editProductSlice from "./editProductSlice";
import uploadSingleProduct from "./uploadSingleProduct";
import deleteProductSlice from "./deleteProductSlice";
import getOrdersSlice from "./getOrdersSlice";
import bannerSlice from "./bannerSlice";

const store = configureStore({
    reducer: {
        banner: bannerSlice,
        products: productSlice,
        orders: getOrdersSlice,
        editProduct: editProductSlice,
        singleProduct: singleProductSlice,
        deleteProduct: deleteProductSlice,
        uploadProduct: uploadSingleProduct,
    }
})

export default store;