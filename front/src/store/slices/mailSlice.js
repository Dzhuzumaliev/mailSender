import {createSlice} from "@reduxjs/toolkit";

const name = 'mails';

export const initialState = {
  loading: false,
  error: null,
};

const mailSlice = createSlice({
  name,
  initialState,
  reducers: {
    createMailRequest(state) {
      state.loading = true;
      state.error = null;
    },
    createMailSuccess(state) {
      state.loading = false;
    },
    createMailFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export default mailSlice;