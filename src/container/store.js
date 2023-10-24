import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import singleProductSlice from "./singleProductSlice";
import editProductSlice from "./editProductSlice";
import uploadSingleProduct from "./uploadSingleProduct";
import deleteProductSlice from "./deleteProductSlice";
import getOrdersSlice from "./getOrdersSlice";
import bannerSlice from "./bannerSlice";
import qrcodeSlice from "./qrcodeSlice";
import noteSlice from "./noteSlice";

const store = configureStore({
    reducer: {
        note: noteSlice,
        banner: bannerSlice,
        qrcodes: qrcodeSlice,
        orders: getOrdersSlice,
        products: productSlice,
        editProduct: editProductSlice,
        singleProduct: singleProductSlice,
        deleteProduct: deleteProductSlice,
        uploadProduct: uploadSingleProduct,
    }
})

export default store;