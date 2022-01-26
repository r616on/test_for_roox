import { configureStore, combineReducers } from "@reduxjs/toolkit";

import UserList from "./UserListSlice";

const rootReducer = combineReducers({
  UserList,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
