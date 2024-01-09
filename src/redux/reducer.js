import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, setStatusFilter } from "./actions";

const contactInitialState = [];

export const contactReducer = createReducer(contactInitialState, (builder) => {
  builder.addCase(addContact.type, (state, action) => {
    state.push(action.payload);
  });

  builder.addCase(deleteContact.type, (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  });
});

const filterInitialState = {
  status: "",
};

export const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase(setStatusFilter.type, (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  });
});
