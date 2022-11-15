import mailSlice from "../slices/mailSlice";

export const {
  createMailRequest,
  createMailSuccess,
  createMailFailure
} = mailSlice.actions;