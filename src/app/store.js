import { configureStore } from "@reduxjs/toolkit";

import productsSlise from "../features/products/productsSlise";

const store = configureStore({
  reducer: {
    products: productsSlise,
  },
});

export default store;
