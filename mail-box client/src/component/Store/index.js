import { configureStore } from "@reduxjs/toolkit";
import authslice from "./Auth-redux";
import emailSlice from "./email-reducer";

const store = configureStore({
  reducer: {
    auth: authslice.reducer,
    email: emailSlice.reducer,
  },
});

export default store;
