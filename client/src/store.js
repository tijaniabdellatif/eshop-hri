import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/user/userSlice";
import productSlice from "./redux/products/productSlice";
import allProductSlice from "./redux/allproducts/allProductSlice";

export const store = configureStore({

    reducer:{

        user:userSlice,
        product:productSlice,
        allproduct:allProductSlice
    }
})