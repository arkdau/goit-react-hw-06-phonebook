import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./reducer";
import { filterReducer, contactReducer } from "./reducer";

// export const store = configureStore({
//   reducer: rootReducer,
// })

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
})


