import { createSlice } from "@reduxjs/toolkit";
import { url } from "../config";

const initialState = {
  items: [],
  url: url,
  requestStatus: {
    loading: false,
    ok: false,
    error: false,
  },
};
//action={type:"",payload:""}

const UserList = createSlice({
  name: "UserList",
  initialState: initialState,
  reducers: {
    initCatalog(state, action) {
      return initialState;
    },

    setItems(state, action) {
      state.items = [...action.payload];
    },
    filterAdress(state) {
      state.items = state.items.sort((a, b) => {
        if (a.address.city > b.address.city) {
          return 1;
        }
        if (a.address.city < b.address.city) {
          return -1;
        }
        return 0;
      });
    },
    filterCompany(state) {
      state.items = state.items.sort((a, b) => {
        if (a.company.name > b.company.name) {
          return 1;
        }
        if (a.company.name < b.company.name) {
          return -1;
        }
        return 0;
      });
    },
    setRequestStatus(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

export const UserListActions = UserList.actions;
export default UserList.reducer;
