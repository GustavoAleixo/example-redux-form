import { createSlice } from "@reduxjs/toolkit";
import { GenericReducerState } from "..";

const REDUCER_NAME = "PRODUCT";

type EVENT_INITIAL_VALUES_TYPE = {
  name: string;
  lastName: string;
  password: string;
  city: string;
  state: string;
  stateList: {
    value: string;
    name: string;
  }[];
};

export type PayloadType = {
  field: keyof typeof INITIAL_VALUES;
  value: any;
};

export const INITIAL_VALUES: EVENT_INITIAL_VALUES_TYPE = {
  name: "",
  lastName: "",
  password: "",
  city: "",
  state: "",
  stateList: [
    {
      name: "Mexico",
      value: "mexico",
    },
  ],
};

export const databaseSlice = createSlice({
  name: REDUCER_NAME,
  initialState: INITIAL_VALUES,
  reducers: {
    setProductNameReducer: (state, value: GenericReducerState<PayloadType>) => {
      state[value.payload.field] = value.payload.value;
    },
    cleanForm: (state) => {
      state.name = INITIAL_VALUES.name;
    },
  },
});

export const { setProductNameReducer, cleanForm } = databaseSlice.actions;

export default databaseSlice.reducer;
