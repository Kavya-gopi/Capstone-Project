import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    image: "",
    _id: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      console.log(action.payload.data);
      // state.user = action.payload.data
      state.user._id = action.payload.data._id;
      state.user.email = action.payload.data.email;
      state.user.firstName = action.payload.data.firstName;
      state.user.lastName = action.payload.data.lastName;
      state.user.image = action.payload.data.image;
    },

    logoutRedux : (state,action)=>{
      state.user._id = "";
      state.user.email = "";
      state.user.firstName = "";
      state.user.lastName = "";
      state.user.image = "";

    }
  },
});
export const { loginRedux,logoutRedux } = userSlice.actions;
export default userSlice.reducer;
