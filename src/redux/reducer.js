import { createReducer } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  setStatusFilter,
} from "./actions";
import { statusFilter } from "./constants";

const contactInitialState = [];

export const contactReducer = createReducer(contactInitialState, (builder) => {
  builder.addCase(addContact.type, (state, action) => {
    // return [...state, action.payload];
    state.push(action.payload);
  });

  builder.addCase(deleteContact.type, (state, action) => {
    // const index = state.findIndex(task => task.id === action.payload);
    // state.splice(index, 1);
    return state.filter((contact) => contact.id !== action.payload);
  });
  });







 const filterInitialState = {
   status: statusFilter.all,
 };

 export const filterReducer = createReducer(filterInitialState, (builder) => {
   builder.addCase(setStatusFilter.type, (state, action) => {
     return {
       ...state,
       status: action.payload,
     };
   });
 });
