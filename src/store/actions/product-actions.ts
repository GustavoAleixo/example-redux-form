import { store } from "..";
import {
  setProductNameReducer,
  cleanForm,
  PayloadType,
} from "../reducers/product-reducer";

export const setProductState = (payload: PayloadType) => {
  store.dispatch(setProductNameReducer(payload));
};

export const cleanFormState = () => {
  store.dispatch(cleanForm());
};
