import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducers/product-reducer";

export type GenericReducerState<T> = {
  payload: T;
  type: string;
};

const reducers = combineReducers({
  product: productReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type TStore = ReturnType<typeof store.getState>;
