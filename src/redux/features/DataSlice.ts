import { createSlice } from "@reduxjs/toolkit";
import { IData } from "../../models/IData";
import { getList, save } from "../../services/StorageService";
import { IAction } from "../models/IAction";

let defaultValue: IData[] = getList<IData>();

const dataSlice = createSlice({
  name: "data",
  initialState: { value: defaultValue },
  reducers: {
    set: (state, action: IAction<IData[]>) => {
      state.value = action.payload;
      save(state.value);
    },
  },
});

export const { set } = dataSlice.actions;
export default dataSlice.reducer;
