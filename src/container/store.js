import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import bannerSlice from "./bannerSlice";
import qrcodeSlice from "./qrcodeSlice";
import productSlice from "./productSlice";
import dashboardSlice from "./dashboardSlice";
import getOrdersSlice from "./getOrdersSlice";
import editProductSlice from "./editProductSlice";
import singleProductSlice from "./singleProductSlice";
import deleteProductSlice from "./deleteProductSlice";
import uploadSingleProduct from "./uploadSingleProduct";

const store = configureStore({
    reducer: {
        note: noteSlice,
        banner: bannerSlice,
        qrcodes: qrcodeSlice,
        orders: getOrdersSlice,
        products: productSlice,
        dashboard: dashboardSlice,
        editProduct: editProductSlice,
        singleProduct: singleProductSlice,
        deleteProduct: deleteProductSlice,
        uploadProduct: uploadSingleProduct,
    }
})

export default store;