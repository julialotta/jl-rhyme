import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./features/DataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
